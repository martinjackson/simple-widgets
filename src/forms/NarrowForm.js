import React, { useState } from "react";

import Form from "./Form";

const NarrowForm = props => {
  const [formData, setFormData] = useState({});

  const onSubmit = e => {
    e.preventDefault();
    props.notify(formData)
  };

  return (
    <Form
      onSubmit={onSubmit}
      formTitle={props.formTitle}
      setFormData={setFormData}
      formStructure={props.formStructure}
      formData={formData}
      buttonText={props.buttonText}
    />
  );
};

export default NarrowForm;
