import React from 'react';

import { CheckBox }      from '../CheckBox.js'
import { CheckBoxGroup } from '../CheckBoxGroup.js'
import { DateInput }     from '../DateInput.js'

import Input from './Input.js'
import { Form, FormTable } from './Form.js'
import { FormChoice } from './FormChoice.js'
import { isFunction } from './isFunction.js'

import ControlledTextarea from './ControlledTextarea.js'

// ---------------------------------------------------------------------------------------------------------------------
const createFieldTextArea = (f, onChange) => {

      // eslint-disable-next-line no-unused-vars
      const { className, name, rows=1, cols=30, ...whatsLeft  } = f

      if (!whatsLeft.maxLength && whatsLeft.size) {
        whatsLeft.maxLength = whatsLeft.size          // default if missing
      }

      if (!whatsLeft.required) {
        whatsLeft.required = false       // default if missing
      }

      if (whatsLeft.value == null) {
        whatsLeft.value = undefined       // default if missing
      }

      return  <ControlledTextarea
                {...whatsLeft}
                className={`input-field form-control ${className||""}`}
                name={name}
                key={name}
                rows={rows}
                cols={cols}
                onChange={onChange}
              />
}

// ---------------------------------------------------------------------------------------------------------------------
const createFieldText = (f, onChange) => {

      // type, name, id, text, value, placeholder, required

      // eslint-disable-next-line no-unused-vars
      const { className, ...whatsLeft  } = f

      if (!whatsLeft.maxLength && whatsLeft.size) {
        whatsLeft.maxLength = whatsLeft.size          // default if missing
      }

      if (!whatsLeft.required) {
        whatsLeft.required = false        // default if missing
      }

      if (whatsLeft.value == null) {
        whatsLeft.value = undefined       // default if missing
      }

      if (whatsLeft.value && !onChange) {
        console.log(`Something weird here: <Input with value ${whatsLeft.value} and not onChange. `);
      }

      return <Input
                {...whatsLeft}
                className={`input-field form-control ${className||""}`}
                onChange={onChange}
              />
  }

// ---------------------------------------------------------------------------------------------------------------------
const createFieldChoice = (f, onChange) => {

        // eslint-disable-next-line no-unused-vars
        const { className, name, ...whatsLeft  } = f

        return <FormChoice
                  {...whatsLeft}
                  className={`select-field form-control ${className||""}`}
                  name={name}
                  key={name}
                  id={name}
                  onChange={onChange} />
    }


// ---------------------------------------------------------------------------------------------------------------------
const createFieldChkBox = (f, onChange) => {

      //    name, value, selectedValue

      // eslint-disable-next-line no-unused-vars
      const { className, name, ...whatsLeft  } = f
      const options = isFunction(f.options) ? f.options() : f.options

      return <CheckBox
                    {...whatsLeft}
                    className={`checkbox-field form-control ${className||""}`}
                    name={name}
                    key={name}
                    choices={options}
                    onChange={onChange} />
  }

// ---------------------------------------------------------------------------------------------------------------------
const createFieldChkBoxes = (f, onChange) => {

      // eslint-disable-next-line no-unused-vars
      const { className, name, ...whatsLeft  } = f
      const options = isFunction(f.options) ? f.options() : f.options

      return <CheckBoxGroup
                    {...whatsLeft}
                    className={`checkbox-group-field form-control ${className||""}`}
                    name={name}
                    key={name}
                    choices={options}
                    onChange={onChange} />
  }

// ---------------------------------------------------------------------------------------------------------------------
const createFieldDate = (f, onChange) => {

    if (onChange == null) {
      console.log('createFieldDate', {f, onChange} );
      throw 'createFieldDate: onChange is null'
    }

    // eslint-disable-next-line no-unused-vars
    const { className, name, format, ...whatsLeft  } = f

    return  <DateInput
                    {...whatsLeft}
                    className={`date-field form-control ${className||""}`}
                    name={name}
                    format={format || "yyyy-mm-dd"}
                    key={name}
                    placeholder={format}
                    onChange={onChange} />
  }

// ---------------------------------------------------------------------------------------------------------------------
const createFieldNumber = (f, onChange) => {

    // type, name, id, text, value, placeholder, required

    // eslint-disable-next-line no-unused-vars
    let { className, size, ...whatsLeft  } = f

    // size does not work on numbers, size=4 style width: 3em
    if (!size) {
      size=4.5
    }

    return <Input
              {...whatsLeft}
              type="number"
              style={{width: (size-0.5)+'em'}}
              className={`input-field form-control no-spinners ${className||""}`}
              onChange={onChange}
            />
  }

// ---------------------------------------------------------------------------------------------------------------------
const createFieldPercent = (f, onChange) => {

  // type, name, id, text, value, placeholder, required

  // eslint-disable-next-line no-unused-vars
  let { className, size, ...whatsLeft  } = f

  // size does not work on numbers, size=4 style width: 3em
  if (!size) {
     size=3.5
  }

  return <Input
            {...whatsLeft}
            type="number"
            style={{width: (size-1)+'em'}}
            className={`input-field form-control no-spinners ${className||""}`}
            onChange={onChange}
          />
}

// ---------------------------------------------------------------------------------------------------------------------
const createForm = (f, onChange) => {

  const { className, ...whatsLeft  } = f

  return <Form
              {...whatsLeft}
              className={`${className||""}`}
              debug={false}
              onChange={onChange}
          />
}

// ---------------------------------------------------------------------------------------------------------------------
const createFormTable = (f, onChange) => {

  const { className, ...whatsLeft  } = f

  return <FormTable
              {...whatsLeft}
              className={`${className||""}`}   // TODO: should have a classname for all FormTables in the Style sheet
              debug={false}
              onChange={onChange}
          />
}

// ---------------------------------------------------------------------------------------------------------------------

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
    'percent':    createFieldPercent,
    'form':       createForm,
    'formTable':  createFormTable,
    // TODO: Radio buttons, DoubleListBox, List, File, (incomplete list)
  }

// ---------------------------------------------------------------------------------------------------------------------
//  add ability to add new Form field types

export const setFieldGenerator = (fieldType, func) => {
      fieldGenerators[fieldType] = func
  }

// ---------------------------------------------------------------------------------------------------------------------
export const fieldGeneratorLookup = (fieldType) => {
    return fieldGenerators[fieldType]
  }
