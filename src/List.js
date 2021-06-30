import React, { Fragment } from 'react';

const hasProperty = (obj, propName) => { return !!Object.getOwnPropertyDescriptor(obj, propName);}


const _Choice = (propsIn, ref) => {

    const {list, choices, size, value, ...props} = propsIn
    // Value should not be a prop, take it out and ignore it.
    const siz = size || 10;
    const opt = list || choices || [];
    const keyPart = (hasProperty(props,'keyName')) ? props.keyName + '_' : '';
    const pref = (hasProperty(props,'name')) ? props.name + '_' + keyPart : '';

    if ( typeof(props.value) == 'string' && !opt.includes(props.value) )
    {
        console.log(`Adding missing default value: '${props.value}' to ${opt}`);
        opt.unshift(props.value)
    }

    const genOptionJSX = (value, pref, el, key) => {
        if (el === value || Array.isArray(value) && value.includes(el) ) {
          return (<option key={pref + key} value={el} selected>{el}</option>)
        }

      return (<option key={pref + key} value={el}>{el}</option>)
    }

    if (props.multiple) {
      return <Fragment>
                <select ref={ref} multiple size={siz} {...props} >
                  {opt.map( (el,k) => genOptionJSX(value, pref, el, k))}
                </select>
            </Fragment>;
    }
    else {
      return <Fragment>
                <select ref={ref} {...props} >
                  {opt.map( (el,k) => genOptionJSX(value, pref, el, k))}
                </select>
            </Fragment>;
    }
}

const _List = (props, ref) => (
  <Choice ref={ref} multiple={true} {...props} />
  )

export const Choice = React.forwardRef(_Choice);
export const List = React.forwardRef(_List);
