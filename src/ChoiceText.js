import React from 'react'
import { hasOwnProperty } from './hasOwnProperty.js'

export const ChoiceText = inProps => {

    let props = {...inProps};
    const pref = (hasOwnProperty(props, 'name')) ? props.name + '_' : '';
    const choices = props.choices;
    delete props.choices;

    return <span>
               <input type="text" {...props} />
               <datalist id={props.list} >
                 {choices.map( (el, k) => <option key={pref + k} value={el}>{el}</option>)}
               </datalist>
          </span>;
}
