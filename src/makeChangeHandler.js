
export default function makeChangeHandler(yourComponent) {
  // console.log('changeHandler generated.');

  return (e) => {

    if (typeof e === 'string')
       return;   // passed in by Radio, can be ignored, next event has target.name

    if (typeof e.preventDefault === 'function')
        e.preventDefault();

    if ('target' in e && 'name' in e.target && 'value' in e.target) {

        var stateChange = {};
        stateChange[e.target.name] = e.target.value;

        // console.log(typeof e, e.target, ':', e.target.value, '->', e.target.name);

        yourComponent.setState(stateChange);
        }
      else {
          // console.log('something unusual here, expecting e.target.name e.target.value e:', typeof e, e);
      }
    }
}

