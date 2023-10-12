
// ----------------------------------------------------------------------------------------------------------------------------------------------
export function formStartMessage(props, formType) {

  if (props.debug) {
    if (props.data) {
      // The top most Form will have data
      console.log('--- '+formType+' parent:', props.parentRecName, 'form name:', props.name, 'data:', props.data);
    }

    if (props.value) {
      // all sub-forms will have info in props.value
      console.log('--- '+formType+' parent:', props.parentRecName, 'form name:', props.name, 'value:', props.value);
    }
  }
}
