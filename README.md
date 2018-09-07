# simple-widgets

A Collection of components to make your React code simpler.

[![Wallaby.js](https://img.shields.io/badge/wallaby.js-configured-green.svg)](https://wallabyjs.com)

simple-widgets ![Test Coverage](https://img.shields.io/badge/Test_Coverage-94.23%25-brightgreen.svg)

- CheckBox ![Test Coverage](https://img.shields.io/badge/Test_Coverage-100%25-brightgreen.svg)
- Choice ![Test Coverage](https://img.shields.io/badge/Test_Coverage-100%25-brightgreen.svg)
- Radio ![Test Coverage](https://img.shields.io/badge/Test_Coverage-100%25-brightgreen.svg)
- [makeChangeHandler ![Test Coverage](https://img.shields.io/badge/Test_Coverage-70%25-green.svg)](test/simple-widgets-coverage.html)


__**Input Components**__

CheckBox, Choice, Radio

Some of the basic HTML input field types reqire different functions to handle changes.
This collection of inputs is built on top of those to give a simpler standard interface.
All of these widgets require the following props:

- name: A unique name for this field with corresponding name in the parent compoent's state _example name="subject"_
- value: value of specific choice or content of text field. _example value={this.state.subject}_
- onChange: function in the parent component to catch/store state changes _example onChange={this.handleChange}_

```javascript
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

pdf-writer     _requires `<script src="jspdf.min.js"></script>` or `<script src="jspdf.debug.js"></script>`_

## Contributing [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)
