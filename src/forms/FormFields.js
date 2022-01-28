import React, {useState, useEffect} from 'react';

import {fieldGeneratorLookup} from './FieldGenerator'

const createFields = (formStructure, formData, handleChange) => {
  return formStructure.map((f,idx) => createField(f, idx, formData[f.name], handleChange) )
}


const createField = (fieldStructure, idx, value, handleChange) => {

  const f = {...fieldStructure, value}            // fieldStructure is a type, create an instance w/ field data

  const gen = fieldGeneratorLookup(f.type)
  let field = `unkknown field type: ${f.type}`
  const ifRequired = (f.required) ? <span className="required">*</span> : null
  if (gen) {
      try {
          field = gen(f, handleChange)
      } catch (e) {
          const msg = `Error Creating Field type: ${f.type} [${idx}]`
          console.log(msg);
          console.log(JSON.stringify(fieldStructure, null, 2));
          console.log(e);
          console.log(e.stack());
          field = msg
      }
  }
return <label htmlFor={f.name} key={idx} className="form-group"><span>{f.text}{ifRequired}</span>{field}</label>
}


const FormFields = ({formStructure,formData,setFormData,showDebug}) => {

  if (!formStructure) {
     console.log('missing formStructure');
     formStructure = []
  }

  // The following does not change, yet gets redefined every time, sigh... wastefull
  // do not use useCallback
  const handleChange = (e => {
    if (showDebug) {
      console.log(`FormFields.handleChange [${e.target.name}] = ${e.target.value};`);
    }
    setFormData({ ...formData, [e.target.name]: e.target.value })
  })

  const [fields, setFields] = useState( createFields(formStructure, formData, handleChange) );

  useEffect(() => {
     // console.log('   FormField useEffect formStructure:', formStructure.length);

     setFields( createFields(formStructure, formData, handleChange) )
  }, [formData])      // TODO:   research why this must be formData and not formStructure
      // only @ creation and when the data changes becuase the structure might change,
      // selection of one field might change the choices on another field.

if (!fields) {
    return "<FormFields />   Somthing horrible: createFields() returned null"
}

const badEntry = fields.findIndex( element => element === null)
if (badEntry !== -1) {
    console.log({formStructure});
    return `<FormFields />   Somthing horrible: createFields() returned [${badEntry}] as null`
}


return (
  <>
    {fields}
  </>
);
};

export default FormFields;

