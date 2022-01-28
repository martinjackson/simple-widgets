import React, {useState, useEffect} from 'react';
import ReactJson from 'react-json-view'
import {FormFields, applyOptions} from ".";

const Form = (props) => {

  if (props.debug) {
    console.log("------- Form:");     // , props);
  }

  const title = (props.title) ? props.title : "Title"
  const debug = (props.debug || props.show)
  const doneBtnLabel = (props.doneBtnLabel) ? props.doneBtnLabel : "Finalize"
  const businessLogic = (props.businessLogic) ? props.businessLogic : (old, changed) => changed

  const [formData, setFormDataInternal] = useState({});
  const [formList, setFormList] = useState( props.form );

  useEffect(() => {
    if (debug) {
       console.log('InitialData setup');
    }
    setFormData(props.data)   // initialData
  }, [])    // only once

  useEffect(() => {
     if (debug) {
       console.log("   Form: props.form changed");
     }

     setFormData(props.data)        // any time the props.data or props.form changes
  }, [props.form])      // formData and formList are recalculated

  useEffect(() => {
    if (debug) {
      console.log("   Form: props.data changed");
    }

    setFormData(props.data)        // any time the props.data or props.form changes
  }, [props.data])      // formData and formList are recalculated

 const setFormData = (newData) => {
    // console.log('setFormData(newData) given: ', newData);

    const [modState, formOpts] = businessLogic(formData, newData)
    setFormList( applyOptions(props.form, formOpts) )    // TODO: unneeded re-render if
    setFormDataInternal(modState)
  }

  // TODO: need to check which fields are required and disable submit button
  //       <form onSubmit={props.onSubmit}>

  const flexParent = {display: 'flex', flexDirection:'row', }
  const flexChild = (props.show) ? {flex:"50%"} : {}
  const rightChild = { ...flexChild, borderLeft: 'solid gray', borderWidth: 'thin' }

  const onSubmit = e => {
    e.preventDefault();
    props.onSubmit(formData)
  };



  return (
    <div style={flexParent}>

        <div style={flexChild}>
          <div className={props.className}>
            <div className="heading">{title}</div>
            <FormFields
                formStructure={formList}
                formData={formData}
                setFormData={setFormData}
                showDebug={debug}
            />
            <div className="footer">
              <input type="button"  onClick={onSubmit} value={doneBtnLabel} />
            </div>
          </div>
        </div>

      {props.show &&
        <div style={rightChild}>
          <ReactJson name="data" src={formData} />
          <hr/>
          <ReactJson name="formList" src={formList} />
        </div>
      }

    </div>)
}

export default Form;
