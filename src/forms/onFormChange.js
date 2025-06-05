
import { applyDeepValueChange } from '../index.js'

// ----------------------------------------------------------------------------
function logErrors(e, help, props) {
  if (props.logErrors) {
    props.logErrors(e.message)
  }
  console.log(help, e.message)
  console.log(e.stack)
}

// ----------------------------------------------------------------------------
function moreChanges(data, targetName, targetValue, props, msgPrefix, setMsg) {

  if (data === undefined || data === null) {
    const msg = 'Attempting field changes in '+msgPrefix+' where there is no data record.'

    const e = new Error(msgPrefix+' ' + msg)
    logErrors(e, msgPrefix+' onChange() error:', props)
    setMsg(msg)
    return
  }

  try {
    // BUG: what if data is an array, not object
    const info = { parentRecName: props.parentRecName, formName: props.name }
    const changes = applyDeepValueChange(data, targetName, targetValue, info, props.debug)

    // echo back up the chain if requested
    if (props.pendingUpdatesFn) {
      props.pendingUpdatesFn(changes.update)
    } else {
      // it's OK, not every form will go back to a database, could be a compound search form
      // console.log('props.pendingUpdatesFn is not defined in form:',props.name ,'record update info will be lost:',changes.update);
    }

    if (props.setData) {
      props.setData(changes.newData) // reg field value changes
    }else {
      const msg = '** missing props fn setData --- '+msgPrefix+' parent: ' + props.parentRecName + '  form name: ' + props.name;
      console.log(msg);
      throw new Error(msg);
    }

  } catch (e) {
    logErrors(e, msgPrefix+' onChange() error:', props)
  }

}

// ----------------------------------------------------------------------------
export function onFormChange(change, props, msgPrefix, setMsg, activeData) {

  if (props.debug) {
    console.log(`${msgPrefix} form name:`, props.name, 'onChange() change:', change)
  }

  let handled = false
  if (props.onChangeSpecial) {
    handled = props.onChangeSpecial(change, moreChanges)
  }

  if (change.target && !handled) {
    if (props.debug) {
      console.log(`  ${msgPrefix} name='${props.name}'>   ${change.target.name} <== ${change.target.value} (${typeof change.target.value})`)
    }
    moreChanges(activeData, change.target.name, change.target.value, props, msgPrefix, setMsg)
  }

}
