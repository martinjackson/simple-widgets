import React from 'react';

// currently only accepts property choices as ['one','two']

export const ChoiceText = inProps => {

    let props = {...inProps};
    const pref = (props.hasOwnProperty('name')) ? props.name + '_' : '';
    const choices = props.choices;
    delete props.choices;

    return <span>
               <input type="text" {...props} />
               <datalist id={props.list} >
                 {choices.map( (el, k) => <option key={pref + k} value={el}>{el}</option>)}
               </datalist>
          </span>;
}
