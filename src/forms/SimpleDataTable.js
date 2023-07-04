import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'

import { SimpleTable }  from '../SimpleTable.js'
import { dTS }           from '../time.js'

import { client }       from './client.js'
import { useErrorList } from './useErrorList.js'
import { Gears }        from './Gears.js'
import { ErrorList }    from './ErrorList.js'
import { makeGqlAST }   from './makeGqlAST.js'
import { getAppSpecificInfo } from './model/appSpecificInfo.js'

// ------------------------------------------------------------------------
export function SimpleDataTable(props) {

  const { namedQueries } = getAppSpecificInfo()
  const queryStr = namedQueries(props.queryName)
  if (!queryStr) {      // null or undefined
    const ErrorMsg = `Error query named: ${props.queryName}, has no definitiion.`
    console.log(ErrorMsg);
    return ErrorMsg
  }

  return <InnerSimpleDataTable {...props} queryStr={queryStr} />
}

// ------------------------------------------------------------------------
function InnerSimpleDataTable(props) {

  const [data, setData] = useState(null)
  const [errors, logErrors] = useErrorList()
  const [needsLoading, setNeedsLoading] = useState(true)

  const identity = (r) => { return r }
  const recSimplify = (props.recSimplify) ? props.recSimplify : identity

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const rec = useQuery(makeGqlAST(props.queryStr), {
    skip: !needsLoading,
    variables: { where: {} },
    client,
    fetchPolicy: 'network-only'
  })

  useEffect(() => {
    if (rec.error) {
      console.log('[rec.error] rec:', rec)
      logErrors(rec.error.message)
    }
  }, [logErrors, rec, rec.error])

  useEffect(() => {
    if (!rec.loading && rec.data) {
      setNeedsLoading(false)

      const recNames = Object.keys(rec.data)
      if (!recNames.includes(props.recordName)) {
        console.log('No "' + props.recordName + '" records retrieved for:', rec.variables.where)
        console.log('No "' + props.recordName + '" in rec ', recNames)
        return
      }

      console.log(dTS(), 'loaded record where:', rec.variables.where, rec.data)

      if (!rec.data[props.recordName]) {      // || rec.data[props.recordName].length == 0) {
        console.log(dTS(), 'No "' + props.recordName + '" records retrieved for:', rec.variables.where)
        console.log(dTS(), 'using (new record):', rec.data[props.recordName])
      } else {
        const reformated = rec.data[props.recordName].map(r => recSimplify(r))
        const data = reformated.filter(r => r != null)   // allow recSimplify to eliminat records

        if (props.reportRecordCount) {
          props.reportRecordCount(data.length)
        }
        setData(data)

      }
    }
  }, [props, rec.data, rec.loading, rec.variables.where, recSimplify])

  if (needsLoading) {
    console.log(dTS(), 'loading QUERY:', props.queryName)
  }


  const newRecRowSelected = (rowData) => {
    console.log('selected rec:', rowData)
    props.recSelected(rowData)
  }

  const table = <SimpleTable data={data} height='17em' dataSelected={newRecRowSelected} />
  const dataArea = (needsLoading) ? <Gears width={70} height={50} /> : table

  console.log('SimpleDataTable neadsLoading:', needsLoading, 'data:', JSON.stringify(data))

  return (
    <div className={props.className}>
      <h1>{props.title}</h1>
      <ErrorList list={errors} />
      {dataArea}

    </div>
  )
}
