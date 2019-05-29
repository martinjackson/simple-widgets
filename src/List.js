import React, { Fragment } from 'react';

export const Choice = React.forwardRef((propsIn, ref) => {

    const {list, choices, size, ...props} = propsIn
    const siz = size || 10;
    const opt = list || choices || []

    if ( typeof(props.value) == 'string' && !opt.includes(props.value) )
       {
         console.log(`Adding missing default value: '${props.value}' to ${opt}`);
         opt.unshift(props.value)
       }

    if (props.multiple) {
      return <Fragment>
                <select ref={ref} multiple size={siz} {...props} >
                  {opt.map( (el,k) => <option key={k} value={el}>{el}</option>)}
                </select>
            </Fragment>;
    }
    else {
      return <Fragment>
                <select {...props} >
                  {opt.map( (el,k) => <option key={k} value={el}>{el}</option>)}
                </select>
            </Fragment>;
    }
});

export const List = React.forwardRef((props, ref) => (
        <Choice ref={ref} multiple={true} {...props} />)
        );
