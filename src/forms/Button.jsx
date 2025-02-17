import React from "react";

export const Button = (props) => {
  return (
    <button title={props.title} onClick={props.onClick}>{props.text}</button>
  )
}

