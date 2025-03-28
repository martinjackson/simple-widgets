import React, { useState } from 'react'

import { SimpleTable }  from '../SimpleTable.js'
import { dTS }           from '../time.js'

import { useErrorList } from './useErrorList.js'
import { Gears }        from './Gears.js'
import { ErrorList }    from './ErrorList.js'
import { getAppSpecificInfo } from './model/appSpecificInfo.js'

// ------------------------------------------------------------------------
export function SimpleDataTable(props) {

  const { execQuery } = getAppSpecificInfo()

  const [data, setData] = useState(null)
  const [errors, logErrors] = useErrorList()
  const [needsLoading, setNeedsLoading] = useState(true)

  const identity = (r) => { return r }
  const recSimplify = (props.recSimplify) ? props.recSimplify : identity

  const where = {}

  const onCompleted = (results) => {
    setNeedsLoading(false)
    let data = results.data

    const recNames = Object.keys(data)
    if (!recNames.includes(props.recordName)) {
      console.log('No "' + props.recordName + '" records retrieved for:', where)
      console.log('No "' + props.recordName + '" in rec ', recNames)
      return
    }

    console.log(dTS(), 'loaded record where:', where, data)

    if (!data[props.recordName]) {
      console.log(dTS(), 'No "' + props.recordName + '" records retrieved for:', where)
      console.log(dTS(), 'using (new record):', data[props.recordName])
    } else {
      const reformated = data[props.recordName].map(r => recSimplify(r))
      data = reformated.filter(r => r != null)   // allow recSimplify to eliminate records

      if (props.reportRecordCount) {
        props.reportRecordCount(data.length)
      }
      setData(data)

    }

  }

  const onError = (error) => {
    if (error) {
      console.log('[execQuery() error] rec:', error)
      logErrors(error.message)
    }
  }

  if (needsLoading) {
    execQuery(props.queryName, { where: where })
    .then(results => onCompleted(results))
    .catch(error => onError(error))

  }

  if (needsLoading) {
    console.log(dTS(), 'SimpleDataTable loading QUERY:', props.queryName)
  }


  const newRecRowSelected = (rowData) => {
    console.log('selected rec:', rowData)
    props.recSelected(rowData)
  }

  const table = <SimpleTable data={data} height='17em' dataSelected={newRecRowSelected} />
  const dataArea = (needsLoading) ? <Gears width={70} height={50} /> : table

  // console.log('SimpleDataTable needsLoading:', needsLoading, 'data:', JSON.stringify(data))

  return (
    <div className={props.className}>
      <h1>{props.title}</h1>
      <ErrorList list={errors} />
      {dataArea}

    </div>
  )
}
