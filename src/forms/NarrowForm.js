import React, { useState } from "react";

import { Form } from '../index.js'

export const NarrowForm = props => {
  const [formData, setFormData] = useState({});

  const onSubmit = e => {
    e.preventDefault();
    props.notify(formData)
  };

  // included in {...props}
  // formTitle={props.formTitle}
  // formStructure={props.formStructure}
  // buttonText={props.buttonText}

  return (
    <Form
      onSubmit={onSubmit}
      setFormData={setFormData}
      formData={formData}
      {...props}
    />
  )
}

