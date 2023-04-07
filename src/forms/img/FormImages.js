
import React from 'react';

// was purchased
// import addRecordBlue from './add-record-blue.svg'  // 339,295 bytes

// https://fontawesome.com/icons/plus?s=solid  => plus-solid.svg
// https://fontawesome.com/icons/clone?s=solid => clone-solid.svg

import addRecord from './plus-solid.svg'              // 510 bytes
import cloneRecord from './clone-solid.svg'           // 489 bytes

// Taken from https://fontawesome.com/docs/web/use-with/react/
// Taken from https://bundlephobia.com/package/@fortawesome/free-solid-svg-icons@6.1.1
//
//                                                   minified     minified+gzipped
// npm i --save @fortawesome/fontawesome-svg-core     58.8 kB         15.5 kB
// npm i --save @fortawesome/free-solid-svg-icons      1.2MB         397.4 kB
// npm i --save @fortawesome/free-regular-svg-icons  159.7 kB         50.1 kB
//
//    <FontAwesomeIcon icon="fa-solid fa-clone" />
//    <FontAwesomeIcon icon="fa-solid fa-plus" />

// props.style {height: "1.0em"}    className='sw-add-record-button'
export const AddRecordIcon = (props) => {
   const cn = (props.className) ? props.className+' ' : ''
   return (<img style={props.style} className={cn+'sw-AddRecordIcon'} src={addRecord}></img>)
}

// props.style {height: "1.0em"}    className='sw-clone-record-button'
export const CloneRecordIcon = (props) => {
  const cn = (props.className) ? props.className+' ' : ''
  return (<img style={props.style} className={cn+'sw-CloneRecordIcon'} src={cloneRecord}></img>)
}

