import React, { Fragment } from 'react';

/*

  TODO:  Handle values other than Strings or something that converts to strings

  currently supports:

  const userList = {0: 'Vacancy, null', 2: 'Hernandez, April', 128: 'Lemon, Brian', 901: 'NCTR, Demo', 1500: 'Rice, Antonie', 1501: 'Woody, Jameca' …}

     <Choice name="NCTR_ID" choices={userList} value=2/>

  OR:

  const userList = ['Vacancy, null','Hernandez, April','Lemon, Brian','NCTR, Demo','Rice, Antonie','Woody, Jameca','Smith, Sherry','Brooks, Roben','Monk, Mary', ... ]

     <Choice name="NCTR_ID" choices={userList} value="Hernandez, April"/>
*/

// --------------------------------------------------------------------------------------------------------------------------------------------------
const compareString = (a,b) => {
   a = a.toUpperCase()
   b = b.toUpperCase()

   if (a < b)  return -1
   if (a > b)  return 1

   return 0
}

// --------------------------------------------------------------------------------------------------------------------------------------------------
const sortKeysByValue = (obj) => {
  const keys = Object.keys(obj)

  const list = keys.map(k => { return {id: k, value: obj[k]} })
                   .sort( (a,b) => compareString(a.value, b.value))

  return list.map(item => item.id)
}

// --------------------------------------------------------------------------------------------------------------------------------------------------
export const Choice = (propsIn) => {

    const {list, choices, size, ...props} = propsIn
    const siz = size || 10;
    const opt = list || choices || []

    const isKeyed = ( !Array.isArray(opt) )
    const keys = (isKeyed) ? sortKeysByValue(opt) : opt     // origianlly       const keys = (isKeyed) ? Object.keys(opt) : opt

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
         console.log(`Adding missing default value: '${props.value}' to ${opt}`);
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

export const List = (props) => <Choice multiple={true} {...props} />
