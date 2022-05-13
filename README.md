# simple-widgets

A Collection of components to make your React code simpler.

Breaking Change:
- 2021-09-01   DatePicker, DatePickerStyle, UnstyledDatePicker are now obsolete  please used DateInput instead (same React props)
- last version (1.11.3) of simple-widgets to have DatePicker, DatePickerStyle, UnstyledDatePicker `npm install --save simple-widgets@1.11.3`

Planned removal:
- dropping makeChangeHandler from library (It assumes React Component style 'this', not React components using React Hooks)

### Installation

Using [npm](https://www.npmjs.com/):
```
    $ npm install --save simple-widgets
```
   or [yarn](https://yarnpkg.com/en/docs/migrating-from-npm):
```
    $ yarn add simple-widgets
```


__**Input Components**__

CheckBox, Choice, ChoiceText, List, Radio, DatePicker, DoubleListBox

Some of the basic HTML input field types reqire different functions to handle changes.
This collection of inputs is built on top of those to give a simpler standard interface.
All of these widgets require the following props:

- name: A unique name for this field with corresponding name in the parent compoent's state _example name="subject"_
- value: where the input value come from  _example value={this.state.subject}_
- onChange: function in the parent component to catch/store state changes _example onChange={this.handleChange}_
- choices: and a array of Strings as pull down choices
- selectedValue: want the 'value' should change to when the CheckBox or Radio button is selected
- text: a label (String or component) displayed following the CheckBox or Radio button


__**Component Documents**__

[CheckBox](docs/CheckBox-Example.md), [Choice](docs/Choice-Example.md), [ChoiceText](docs/ChoiceText.md), [DoubleListBox](docs/DoubleListBox.md),  [List](docs/List.md), [Radio](docs/Radio-Example.md), [InputFile](docs/InputFile.md), [Slider](docs/Slider.md)

[AlertModal](docs/AlertModal.md), [ErrorModal](docs/ErrorModal.md), [ConfirmModal](docs/ConfirmModal.md), [Modal](docs/Modal.md), [StatusBox](docs/StatusBox.md)

[Invalid](docs/Invalid.md)

[SearchSortTable](docs/SearchSortTable.md), [ContextMenu](docs/ContextMenu.md), [Theme](docs/Theme.md)

[Search Functions](docs/SearchFunct.md), [Date Functions](docs/DateFunct.md), [Common Functions](docs/Common.md)

[Entry Form](docs/EntryForm.md) is used to help line up components in a form.

[MenuBar](docs/MenuBar.md), [FlatMenu](docs/FlatMenu.md), [Menu Utils](docs/MenuUtils.md), [Header](docs/Header.md), [Outline](docs/Outline.md)

[Browser Detect](docs/BrowserDetect.md)

__**Getting Started**__
- [Short Tutorial](GettingStarted.md)
- [Example Project](https://github.com/martinjackson/simple-widgets-sample)

__**CSS File Information**__

[Using CSS Files](docs/UsingCSS.md)

### Build and Publish

1. npm run pack
2. npm run dry
3. npm run pub

## Source Code Build Dependencies

- wallaby.js needs .babelrc for code coverage testing
- webpack uses babel config in webpack.config.js babel-loader section

## Contributing [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/martinjackson/simple-widgets/issues)

<table>
<tbody>
<tr>
<td align="center">
<a href="https://streamof.info"><img src="https://avatars0.githubusercontent.com/u/7481?s=460&v=4" width="100px;"/><br /><sub><b>Martin A. Jackson</b></sub></a>
</td>
<td align="center">
<a href="https://github.com/jimabele"><img src="https://avatars1.githubusercontent.com/u/73892263?s=460&amp;u=fb1dc1c6a877bbe87db054f5570c12a6c77d627f&amp;v=4" width="100px;"/><br /><sub><b>Jim Abele</b></sub></a>
</td>
</tbody>
</table>
