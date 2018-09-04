# simple-widgets
A Collection of components to make your React code simpler.

__**Input Components**__

CheckBox, Choice, Radio

Some of the basic HTML input field types reqire different functions to handle changes.
This collection of inputs is built on top of those to give a simpler standard interface.
All of these widgets require the following props:

- name: A unique name for this field with corresponding name in the parent compoent's state _example name="subject"_
- value: value of specific choice or content of text field. _example value={this.state.subject}_
- onChange: function in the parent component to catch/store state changes _example onChange={this.handleChange}_

```
handleChange(e) {
       if (typeof e === 'string')
          return;   // passed in by Radio, can be ignored, next event has target.name

       if (typeof e.preventDefault === 'function') {
           e.preventDefault();

           var stateChange = {};
           stateChange[e.target.name] = e.target.value;
           this.setState(stateChange);
           }
         else {
           console.log(typeof e);  // something unusual, lets find out
           console.log(e);
         }
   }
```



__**Report Components**__

pdf-writer

