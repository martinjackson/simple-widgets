import React from 'react';
import { Button } from './Button.js';
import { AddRecordIcon, CloneRecordIcon } from './img/FormImages.js';
import { DatabaseLoadingIcon } from './DatabaseLoadingIcon.js';


// ----------------------------------------------------------------------------------------------------------------------------------------------
export const FormHeader = (props) => {

  const numRecs = props.numRecs;

  const AddRecButton = (props.onAddRec) ? <button title="New" onClick={props.onAddRec}><AddRecordIcon /></button> : null
  const CloneRecButton = (props.onCloneRec) ? <button title="New cloned data" onClick={props.onCloneRec}><CloneRecordIcon /></button> : null
  const isLoading = (props.loadInProgress) ? <DatabaseLoadingIcon /> : null;

  let recMsg = '';
  let cntMsg = '';
  if (numRecs) { // not null
    recMsg = (numRecs != 1) ? `${numRecs} records ` : 'one record ';
    cntMsg = (numRecs != 1) ? props.dataRowStart + 1 : '';
    if (!props.parentRecName) {
      recMsg = '';
    }
  }

  const noLeft = <span>&nbsp;&nbsp;&nbsp;</span>; // same width as left arrow ??
  const LeftArrow = (props.dataRowStart > 0) ? <Button title="Previous" text={"\u25C0"} onClick={props.recPrevFn} /> : noLeft;
  const RightArrow = (props.dataRowStart < numRecs - 1) ? <Button title="Next" text={"\u25B6"} onClick={props.recNextFn} /> : <></>;
  const FormHeaderLabel = <span className='formHeaderLabel'>{props.header}</span>; // initially for puppeteer location

  return <div className="heading">
    <div className="flex justify-between">
      <div>{FormHeaderLabel} {isLoading} {AddRecButton} {CloneRecButton}   {LeftArrow} {cntMsg} {RightArrow} </div>
      <div>{recMsg}</div>
    </div>
  </div>;

};
