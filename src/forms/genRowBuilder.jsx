import React from 'react';

import { getTableColumns } from './model/getTableColumns.js'

// ---------------------------------------------------------------------------------------------------------------------
const genHdr = (name) => {
  const header = name.replace(/_/g, ' ');
  return { header, name, search: true, sort: true };
}

// ---------------------------------------------------------------------------------------------------------------------
export const genColHeaders = (tableName) => {

  return getTableColumns(tableName).map(col => genHdr(col))
}

// ---------------------------------------------------------------------------------------------------------------------
export const genRowBuilder = (fns) => {

    const buildRow = (row, i) => {
        const cellStyle = { backgroundColor: (i % 2) ? 'lightgray' : 'inherit' };

        const editCell  = (fns.editFn)  ? <td key="editButton" ><button onClick={() => fns.editFn(row)}  >Edit</button></td>   : null
        const cloneCell = (fns.cloneFn) ? <td key="cloneButton"><button onClick={() => fns.cloneFn(row)} >Clone</button></td>  : null
        const delCell   = (fns.delFn)   ? <td key="delButton"  ><button onClick={() => fns.delFn(row)}   >Delete</button></td> : null

        const fields = Object.keys(row);
        return (<tr key={i} style={cellStyle}>
          {fields.map(name => <td key={name}>{row[name]}</td>)}
          {editCell}
          {cloneCell}
          {delCell}
        </tr>);
      };

      return buildRow;
  }
