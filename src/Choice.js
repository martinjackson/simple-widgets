import React, { Fragment } from 'react';

// --------------------------------------------------------------------------------------------------------------------------------------------------
export const Choice = (propsIn) => {

    // console.log('>>> Choice(', propsIn, ')')

    const {list, choices, size, ...props} = propsIn
    const siz = size || 10;
    const opt = list || choices || []

    const isKeyed = ( !Array.isArray(opt) )
    const keys = (isKeyed) ? Object.keys(opt) : opt

    const genOption = (el, k) => {
      if (isKeyed) {
        return (opt[el] == props.value) ?
          <option key={k} value={el} selected={true}>{opt[el]}</option> :                 // <option key="1" value="2" selected={true}>'Hernandez, April'</option>
          <option key={k} value={el}>{opt[el]}</option>
      } else {
        return (el == props.value) ?
            <option key={k} value={el} selected={true}>{el}</option> :
            <option key={k} value={el}>{el}</option>
      }
    }


    if ( !isKeyed && typeof(props.value) == 'string' &&  Array.isArray(opt) && !opt.includes(props.value) )
       {
         if (opt.length > 0) {
           console.log(`Adding missing default value: '${props.value}' to ${opt}`);
         }
         opt.unshift(props.value)
       }

    if (props.multiple) {
      return <Fragment>
                <select multiple size={siz} {...props} >
                  {keys.map( (el,k) => genOption(el,k) )}
                </select>
            </Fragment>;
    }
    else {
      return <Fragment>
                <select {...props} >
                  {keys.map( (el,k) => genOption(el,k) )}
                </select>
            </Fragment>;
    }
}
