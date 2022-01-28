import React from 'react';

import {Choice} from './List'
import Input from "./Input"
// import Button from "./Button"
import {CheckBox} from "./CheckBox"
import CheckBoxGroup from "./CheckBoxGroup"
import DateInput from "./DateInput"

function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
 }



 const createFieldTextArea = (f, handleChange) => {

  const { className, name, rows=4, cols=60, ...whatsleft  } = f

  return  <textarea
            {...whatsleft}
            className={`input-field form-control ${className||""}`}
            name={name}
            key={name}
            rows={rows}
            cols={cols}
            onChange={handleChange}
          />
}

const createFieldText = (f, handleChange) => {

      // type, name, id, text, value, placeholder, required
      const { className, ...whatsleft  } = f

      return <Input
                {...whatsleft}
                className={`input-field form-control ${className||""}`}
                handleChange={handleChange}
              />
  }

  const createFieldChoice = (f, handleChange) => {

        //    name, value
        const { className, name, ...whatsleft  } = f
        const options = isFunction(f.options) ? f.options() : f.options
        return <Choice
                  {...whatsleft}
                  className={`select-field form-control ${className||""}`}
                  name={name}
                  key={name}
                  id={name}
                  choices={options}
                  onChange={handleChange} />
    }


  const createFieldChkBox = (f, handleChange) => {

      //    name, value, selectedValue
      const { className, name, ...whatsleft  } = f
      const options = isFunction(f.options) ? f.options() : f.options

      return <CheckBox
                    {...whatsleft}
                    className={`checkbox-field form-control ${className||""}`}
                    name={name}
                    key={name}
                    choices={options}
                    onChange={handleChange} />
  }

  const createFieldChkBoxes = (f, handleChange) => {

      const { className, name, ...whatsleft  } = f
      const options = isFunction(f.options) ? f.options() : f.options

      return <CheckBoxGroup
                    {...whatsleft}
                    className={`checkbox-group-field form-control ${className||""}`}
                    name={name}
                    key={name}
                    choices={options}
                    onChange={handleChange} />
  }

  const createFieldDate = (f, handleChange) => {

    const { className, name, format, ...whatsleft  } = f

    return  <DateInput
                    {...whatsleft}
                    className={`date-field form-control ${className||""}`}
                    name={name}
                    format={format}
                    key={name}
                    placeholder={format}
                    onChange={handleChange} />
  }

  const createFieldNumber = (f, handleChange) => {

    // type, name, id, text, value, placeholder, required
    const { className, ...whatsleft  } = f

    return <Input
              {...whatsleft}
              type="number"
              className={`input-field form-control ${className||""}`}
              handleChange={handleChange}
            />
  }

  const fieldGenerators = {
    'text':       createFieldText,
    'textArea':   createFieldTextArea,
    'password':   createFieldText,
    'email':      createFieldText,
    'choice':     createFieldChoice,
    'chkBox':     createFieldChkBox,
    'chkBoxes':   createFieldChkBoxes,
    'date':       createFieldDate,
    'number':     createFieldNumber,
    // TODO: Radio buttons, DoubleListBox, List, File, (incomplete list)
  }

  //  add ability to add new Form field types
  export const setFieldGenerator = (fieldType, func) => {
      fieldGenerators[fieldType] = func
  }

  export const fieldGeneratorLookup = (fieldType) => {
    return fieldGenerators[fieldType]
  }
