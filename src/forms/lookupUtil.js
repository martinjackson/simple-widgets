
// cSpell:ignore nctr userdir

import sizeof from 'object-sizeof'

import { now, TS }    from '../time.js'
import { isNotEmpty } from './isNotEmpty.js'
import { getAppSpecificInfo } from './model/appSpecificInfo.js'

// -----------------------------------------------------------------------------------------------------
let pendingLookupQueries = 0;

const notifyAllDone = []
// -----------------------------------------------------------------------------------------------------
export const notifyLookupsDone = (f) => {
  notifyAllDone.push(f)

  if (pendingLookupQueries == 0) {
    notifyAllDone.map(f => f())
  }
}

const lookups = {}

// -----------------------------------------------------------------------------------------------------
const createLookup = (name) => {          // name: String

  if (!lookups[name]) {
    lookups[name] = {
          loadingComplete: false,
          start: null,
          end: null,
          aliasName: null,           // set if an alias
          data: [],
          error: null,
          query: null,
          translateFn: null,
          notify: []
        }
    }
}

// -----------------------------------------------------------------------------------------------------
export const isLookupDone = (name) => {

  let done = false
  if (lookups[name] !== undefined && lookups[name].end != null) {
    done = true
  }

  return done
}

// -----------------------------------------------------------------------------------------------------
export const serializeLookups = () => {                 // TODO: test and implement        serializeLookups()

  // can not use structuredClone() on JSON with fn() like function transFnNctr(data) {

  const clone = {}

  // remove all references to functions
  Object.keys(lookups).forEach(k => {
    clone[k] = {}

    clone[k].start      = lookups[k].start
    clone[k].end        = lookups[k].end
    clone[k].aliasName  = lookups[k].aliasName
    clone[k].data       = structuredClone(lookups[k].data)        // deep clones
    clone[k].error      = structuredClone(lookups[k].error)
    clone[k].query      = structuredClone(lookups[k].query)
  })

  return clone
}

// -----------------------------------------------------------------------------------------------------
export const loadSerializedLookups = (data) => {           // TODO: test and implement    loadSerializedLookups()

  if (data != null) {
    Object.keys(data).forEach(k => {
        createLookup(k)
        lookups[k].start      = null     // data[k].start    preloaded data should not have a start and end load time
        lookups[k].end        = null     // data[k].end
        lookups[k].aliasName  = data[k].aliasName
        lookups[k].data       = data[k].data
        lookups[k].error      = data[k].error
        lookups[k].query      = data[k].query
    })
  }
}

// -----------------------------------------------------------------------------------------------------
export const setLookupData = (name, data, error) => {          // name: String
  createLookup(name)
  lookups[name].loadingComplete = true
  lookups[name].data = data
  lookups[name].error = error
  lookups[name].notify.map( f=> f(name, data, error))
}


// -----------------------------------------------------------------------------------------------------
export const addLookupAlias = (alias, name) => {          // name: String      query: GraphQL query

  const notifyFn = (lookupName, data, error) => {
    setLookupData(alias, data, error)
  }

  createLookup(alias)
  if (lookups[alias].aliasName) {   // remove listening to previous alias
    removeNotify(lookups[alias].aliasName, notifyFn)
  }

  lookups[alias].aliasName  = name                               // save who we are an alias for
  notifyFn(name, lookups[name].data, lookups[name].error)   // assign new data, notify all

  addNotify(name, notifyFn)
}

// -----------------------------------------------------------------------------------------------------
export const changeLookupAlias = addLookupAlias       // functionality for changing the Alias is already built in, but not obvious

// -----------------------------------------------------------------------------------------------------
  // name: String      query: GraphQL query
export const defineLookup = (name, queryVars, transFn, cb=null) => {

  createLookup(name)
  lookups[name].queryName   = name
  lookups[name].queryVars   = queryVars
  lookups[name].translateFn = transFn

  if (lookups[name].start === null) {   // may have been preloaded, but let's get fresh data
    startLookup(name, cb)
  } else {
    if (lookups[name].end === null) {
      console.log(`defineLookup(${name}) has already started to load. If variables changed or you wish to refresh the data? call refreshLookup()`);
    } else {
      console.log(`defineLookup(${name}) has already loaded. If variables changed or you wish to refresh the data? call refreshLookup()`);
    }
  }
}


// -----------------------------------------------------------------------------------------------------
export const fetchLookupData = (lookupName, notifyFn=null) => {

    addNotify(lookupName, notifyFn)

    if (lookups[lookupName] && lookups[lookupName].data) {

        // lookupLog(TS(), `fetchLookupData(${lookupName}) found ${lookups[lookupName].data.length}`);
        if (!lookups[lookupName].loadingComplete) {
          return null                                  // at this stage .data === []
        }

        return lookups[lookupName].data
    }

    console.log(`fetchLookupData(${lookupName}) found no lookup by that name...`);

    return null       // either not loaded yet, or wrong name

}

// -----------------------------------------------------------------------------------------------------
// const missingTranslateFn = (data) => {
//   const name = Object.keys(data)[0]
//   return data[name]      // {division: Array(75)} or {userdir: Array(11099)}
// }

// -----------------------------------------------------------------------------------------------------
export const startLookup = (lookupName, cb = null) => {
  pendingLookupQueries++

  createLookup(lookupName)

  if (lookups[lookupName].queryName === null)
     return  // nothing to do

  if (!lookups[lookupName]['queryVars']) {
    lookups[lookupName]['queryVars'] = {}
  }

  lookups[lookupName].start = now()
  lookupLog(TS(), 'loading lookup:', lookupName);

  const { execQuery } = getAppSpecificInfo()

  execQuery(lookups[lookupName].queryName, lookups[lookupName].queryVars)
    .then(results => {

      let normalized = results.data
      if (lookups[lookupName].translateFn) {
         normalized = lookups[lookupName].translateFn(results.data)
         // TODO: this will blow up of the normalized is not {value, label}
         normalized.unshift({value: null, label: ''})    // add default 'no value set'
      }

      const summary = Object.keys(results.data).map(k => k+'['+results.data[k].length+']').join(', ')
      const example = (Array.isArray(normalized)) ? ' [0]:'+JSON.stringify(normalized[0]) : ''

      lookups[lookupName].end = now()
      lookups[lookupName].summary = summary + example
      setLookupData(lookupName, normalized, null)   // no error

      lookupLog(TS(), 'lookup:',lookupName, 'summary:', lookups[lookupName].summary)

      if (cb != null) {
        cb(lookupName, 'complete')
      }

      pendingLookupQueries--
      if (pendingLookupQueries <= 0) {
        notifyAllDone.map(f => f())
      }
    })
    .catch(err => {
      lookups[lookupName].end = now()
      setLookupData(lookupName, null, err)   // no data
      lookupLog(TS(), '------------------------------------------');
      lookupLog(TS(), 'lookups:', lookupName)
      lookupLog(TS(), err)
      lookupLog(TS(), '------------------------------------------');
      cb(lookupName, 'error', err)
    });
}

// in the future, this may need to be different than startLookup()
// -----------------------------------------------------------------------------------------------------
export const refreshLookup = (lookupName, cb = null) => {
  startLookup(lookupName, cb)
}

// -----------------------------------------------------------------------------------------------------
export const addNotify = (lookupName, f) => {

    createLookup(lookupName)
    if (f && lookups[lookupName] !== undefined) {
      lookups[lookupName].notify.push(f)
    }
  }

// -----------------------------------------------------------------------------------------------------
export const removeNotify = (lookupName, f) => {

  createLookup(lookupName)
  if (f) {
    lookups[lookupName].notify = lookups[lookupName].notify.filter( val => val != f);
  }
}

// -----------------------------------------------------------------------------------------------------
export const calcLookupMemoryUse = () => {

  return Object.keys(lookups).map(name => {

    const loaded = isNotEmpty(lookups[name].data)

    return ({
        lookupName: name,
        error: lookups[name].error,
        loaded: loaded,
        size: sizeof(lookups[name].data),
        start: lookups[name].start,
        end: lookups[name].end,
        summary: lookups[name].summary
      })
    })

}

var logMessages = [];
// -----------------------------------------------------------------------------------------------------
export const lookupLog = function() {
    logMessages.push.apply(logMessages, arguments);
}

// -----------------------------------------------------------------------------------------------------
export const getLookupLogs = () => {
  return logMessages.join('\n').replaceAll(']\n', '] ')
}

// -----------------------------------------------------------------------------------------------------
export const getLookupSummary = () => {

  const list = Object.keys(lookups).map(name => {

    if (lookups[name].aliasName) {
      return `${name} alias to ${lookups[name].aliasName}`
    }

    if (Array.isArray(lookups[name].data)) {

      const len = lookups[name].data.length
      return `${name}[${len}]`

    } else {
      const loaded = isNotEmpty(lookups[name].data)
      if (loaded) {

        const summary = lookups[name].summary
        return `${name} ${summary}`

      } else {

        return `${name} not loaded`

      }
    }

  })

  return list.join('\n')

}

// -----------------------------------------------------------------------------------------------------

/*

// import { openGeneralStore, createStoreItem } from './simple-widgets'

not in use  2022-08-23

// -----------------------------------------------------------------------------------------------------
exp ort const useLookup = (lookupName) => {

    const [data, setData] = createStoreItem('Lookup-data-'+lookupName, null)
    const [err, setErr]   = createStoreItem('Lookup-err-'+lookupName, null)

    const notifyFn = (data, err) => {
      setData(data)
      setErr(err)
    }

    addNotify(lookupName, notifyFn)

    if (lookups[lookupName].data) {
      setData(lookups[lookupName].data)
    }

    if (lookups[lookupName].error) {
      setErr(lookups[lookupName].error)
    }

    return [data, err]
}
*/
