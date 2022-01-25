import React from "react";

// import classes from "./Button.module.css";
//       <button  onClick={clicked} className={`${classes.button} ${classes[buttonType]}`}>

const Button = ({ text, clicked, buttonType }) => {
  return (
    <>
      <button  onClick={clicked}>
        {text}
      </button>
    </>
  );
};

export default Button;
