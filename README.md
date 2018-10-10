# simple-widgets

A Collection of components to make your React code simpler.

[![Wallaby.js](https://img.shields.io/badge/wallaby.js-configured-green.svg)](https://wallabyjs.com)

simple-widgets ![Test Coverage](https://img.shields.io/badge/Test_Coverage-94.34%25-brightgreen.svg)

- CheckBox ![Test Coverage](https://img.shields.io/badge/Test_Coverage-100%25-brightgreen.svg)
- Choice ![Test Coverage](https://img.shields.io/badge/Test_Coverage-100%25-brightgreen.svg)
- Radio ![Test Coverage](https://img.shields.io/badge/Test_Coverage-100%25-brightgreen.svg)
- makeChangeHandler ![Test Coverage](https://img.shields.io/badge/Test_Coverage-70%25-green.svg)
  [see where](
  http://htmlpreview.github.com/?https://github.com/martinjackson/simple-widgets/blob/master/test/simple-widgets-coverage.html)

__**Input Components**__

CheckBox, Choice, Radio

Some of the basic HTML input field types reqire different functions to handle changes.
This collection of inputs is built on top of those to give a simpler standard interface.
All of these widgets require the following props:

- name: A unique name for this field with corresponding name in the parent compoent's state _example name="subject"_
- value: where the input value come from  _example value={this.state.subject}_
- onChange: function in the parent component to catch/store state changes _example onChange={this.handleChange}_
- choices: and a array of Strings as pull down choices
- selectedValue: want the 'value' should change to when the CheckBox or Radio button is selected
- text: a label (String or component) displayed following the CheckBox or Radio button

## Getting Started

Add simple-widgets to yor project

```bash
npm install simple-widgets --save
```

or

```bash
yarn add simple-widgets
```

use like the following

```javascript

import {CheckBox, Choice, Radio, makeChangeHandler} from 'simple-widgets'

class App extends Component {

  constructor(props) {
        super(props)
        this.handleChange = makeChangeHandler(this)
    }

  render() {
    const modes = ["java", "javascript", "jsx", "markdown", "bash"]

    return (
      <div>
        <label>Name: </label><input                      name="name"     value={this.state.name}     onChange={this.handleChange} />
        <Choice   choices={modes}                        name="ex2_mode" value={this.state.ex2_mode} onChange={this.handleChange} />
        <CheckBox selectedValue="Preview" text="Preview" name="preview"  value={this.state.preview}  onChange={this.handleChange} />
        <Radio    selectedValue="1"       text="Year 1"  name="year"     value={this.state.year}     onChange={this.handleChange} />
        <Radio    selectedValue="2"       text="Year 2"  name="year"     value={this.state.year}     onChange={this.handleChange} />
        <Radio    selectedValue="3"       text="Year 3"  name="year"     value={this.state.year}     onChange={this.handleChange} disabled />
      </div>
    )
  }
}
```

A full working example can be found in a sister github repo 

```bash
cd ~/projects/
git clone https://github.com/martinjackson/simple-widgets-sample.git
cd simple-widgets-sample
npm install
npm start
```

__**Report Components**__

pdf-writer (still in development, not part of npm package yet)

    TODO: pdf-writer requires `<script src="jspdf.min.js"></script>` or `<script src="jspdf.debug.js"></script>`_

## Contributing [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/martinjackson/simple-widgets/issues)

<table>
<tbody>
<tr>
<td align="center">
<a href="https://streamof.info"><img src="https://avatars0.githubusercontent.com/u/7481?s=460&v=4" width="100px;"/><br /><sub><b>Martin A. Jackson</b></sub></a>
</td>
<td align="center">
<a href="http://google.com?JimAbele"><img src="https://avatars0.githubusercontent.com/u/0?s=460&v=4" width="100px;"/><br /><sub><b>Jim Abele</b></sub></a>
</td>
</tbody>
</table>
