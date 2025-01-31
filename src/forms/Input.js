import React from "react";

// import classes from "./Input.module.css";
//         className={classes.input}

import ControlledInput from "./ControlledInput.js"      // drop in replacement for <input  but preserves cursor position

export const Input = (props) => {

    // optional:     maxLength, size,  maxLength={maxLength},  size={size}

    const { className, type, name, text, onChange,
            id = name,
            value,
            placeholder = text,
            required = false,
            readOnly = false,
            ...whatsleft             } = props

    const missingOnChange = () => {}
    const missingVal = (type === 'number') ? 0 : ''

  return (
      <ControlledInput
        type={type}
        name={name}
        className={className}
        key={id}
        id={id}
        placeholder={placeholder}
        required={required}
        readOnly={readOnly}
        value={value ? value : missingVal}
        onChange={onChange ? onChange : missingOnChange }
        {...whatsleft}
      />
  );
};

