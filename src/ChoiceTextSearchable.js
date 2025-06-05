import React, { useState, useEffect } from 'react';

import { ChoiceText } from './index.js'


// --------------------------------------------------------------------------------------------------------------------------------------------------
export function ChoiceTextSearchable(props) {

  const [value, setValue] = useState(props.value);

  useEffect(() => {
     setValue(props.value)
  }, [props.value])    // initial state rec is empty,
                       // after record load, props changes

  // -----------------------------------------------------
  const onChange = (e) => {
    if (e.target) {
      setValue(e.target.value)
      props.onChange(e)
      // let FormChoice decide to propagate if value matches a pair  opt pairs
      }
  }

  return (
    <ChoiceText
      {...props}
      value={value}
      list={props.name+"-List"}
      onChange={onChange}
    />
  )

}
