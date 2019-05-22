import React, { Fragment } from 'react';

export const Choice = (propsIn) => {

    const {list, choices, size, ...props} = propsIn
    const siz = size || 10;
    const opt = list || choices || []

    if ( typeof(props.value) == 'string' && !opt.includes(props.value) )
       {
         console.log(`Adding missing default value: '${props.value}'`);
         opt.unshift(props.value)
       }

    if (props.multiple) {
      return <Fragment>
                <select multiple size={siz} {...props} >
                  {opt.map( el => <option key={el} value={el}>{el}</option>)}
                </select>
            </Fragment>;
    }
    else {
      return <Fragment>
                <select {...props} >
                  {opt.map( el => <option key={el} value={el}>{el}</option>)}
                </select>
            </Fragment>;
    }
}

export const List = (props) => { return <Choice multiple={true} {...props} /> }
