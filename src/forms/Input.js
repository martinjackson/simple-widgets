import React from "react";

// import classes from "./Input.module.css";
//         className={classes.input}

const Input = (props) => {

  // optional:     maxLength, size,
  //         maxLength={maxLength}
 //          size={size}


  const { className, type, name, text, handleChange,
          id = name,
          value = "",
          placeholder = text,
          required = false,
          ...whatsleft             } = props

  return (
      <input
        className={className}
        key={id}
        type={type}
        name={name}
        value={value}
        id={id}
        placeholder={placeholder}
        required={required}
        onChange={handleChange}
        {...whatsleft}
      />
  );
};

export default Input;
