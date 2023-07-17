
import React from 'react'

import { SearchSortTable } from './SearchSortTable.js'

// ---------------------------------------------------------------------------------------------------------------
export const SimpleTable = (props) => {

  const height = (props.height) ? props.height : '17em'
  const data = (props.data) ? props.data : []

  if (!props.dataSelected) {
    return <span>SimpleTable requires props.dataSelected</span>
  }

  const eachRowInTable = (row, i) => {

    const cols = (!row) ? null : Object.keys(row).map( (idx, j) => ( <td key={i+'_'+j}>{row[idx]}</td> ) )
    const odd = (i%2) ? 'sw-sst_oddRow' : 'sw-sst_evenRow'

    return (<tr onClick={() => props.dataSelected(row)} className={odd} key={i}>{cols}</tr>)
  }

  // console.log('SimpleTable data:', data);

  if (data.length === 0) {
         // console.log('SimpleTable avoiding SearchSortTable w/o data:', data);
      return <span title={'[0 Records]'}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

      // TODO: find out why SearchSortTable no longer changes when the data arrives
  }

  return (<SearchSortTable data={data}
           scroll spinner hover nofooter nofilter  showall searchstart nopdf noexcel
          height={height} eachRowInTable={eachRowInTable}
          hiddenLookupColumns={props.hiddenLookupColumns}
          />)

}
