import React from "react";

//     <input key={'key-'+props.text} type="button" onClick={props.clicked} value={props.text} />

export const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

