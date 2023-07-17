# simple-widgets

A Collection of components to make your React code simpler.

---------------------

## From Synk Reports:

H - word-wrap Regular Expression Denial of Service (ReDoS) Vulnerability

[CWE-1333](https://cwe.mitre.org/data/definitions/1333.html)
[CVE-2023-26115](https://www.cve.org/CVERecord?id=CVE-2023-26115)
[CVSS 7.5 HIGH](https://www.first.org/cvss/calculator/3.1#CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H/E:P)
[SNYK-JS-WORDWRAP-3149973](https://app.snyk.io/vuln/SNYK-JS-WORDWRAP-3149973)

**Introduced through: pdfmake@0.2.7**
**Exploit maturity: PROOF OF CONCEPT**

Introduced through: simple-widgets@1.35.4 › pdfmake@0.2.7 › @foliojs-fork/linebreak@1.1.1 › brfs@2.0.2 › static-module@3.0.4 › escodegen@1.14.3 › optionator@0.8.3 › word-wrap@1.2.3
Fix: No remediation path available.

---------------------

## Breaking Changes:

- 2023-06-05 Simple-Widgets version 1.35.0  \<Form> and \<FormFields> now calls the App supplied formDictionary() passing a string
    instead of the previous argument {formName: string}. Below is the code change needed to be compatable with previous versions of simple-widgets. Moving forward, the App supplied formDictionary() can expest a single string.

    ```js
    // in src/App.js
            setAppSpecificInfo({dbStruct, formDictionary, namedQueries})

    // in src/entry/formDictionary.js
    const formDictionary = (search) => {

        const formName = (typeof search === 'object') ? search.formName : formName
         // old version of simple-widgets did a structure
         // simple-widgets v1.35.0 it is now a string
    ```

    *Why the breaking change?*

    Origial idea was the ability to search by different elements in each entry in the dictionary (gqlName, db table name, etc.)  This was before introducing the concept of named forms (to support forms refereenced within other forms, records and child records).
    Since forms are uniquely named and the primary form name is provided to \<Form> and \<FormFields> this change cleans up the design.

- 2021-09-01   DatePicker, DatePickerStyle, UnstyledDatePicker are now obsolete  please used DateInput instead (same React props)
- last version (1.11.3) of simple-widgets to have DatePicker, DatePickerStyle, UnstyledDatePicker `npm install --save simple-widgets@1.11.3`

Planned removal:

- dropping makeChangeHandler from library (It assumes React Component style 'this', not React components using React Hooks)

---------------------

## Kept back

These are kept back because we are still holding compatability with react 17.0.2 and react-dom 17.0.2

```bash
@testing-library/dom                                 8.19.0  →     9.3.1
@testing-library/react                               12.1.5  →    14.0.0
react-test-renderer                                 ^17.0.0  →   ^18.2.0
```

## Installation

Using [npm](https://www.npmjs.com/):

```bash
    npm install --save simple-widgets
```

   or [yarn](https://yarnpkg.com/en/docs/migrating-from-npm):

```bash
    yarn add simple-widgets
```

---------------------

## How to test the library locally (before publishing to npm)

```bash
cd ~/projects/simple-widgets
npm run build
npm pack

cd ~/projects/testProject
npm install  ~/projects/simple-widgets/simple-widgets-1.33.11.tgz

```

## Input Components

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

## Release Notes

[1.32.0](docs/releases/release_1.32.0.md)
[1.33.0](docs/releases/release_1.33.0.md)
[1.33.1](docs/releases/release_1.33.1.md)
[1.34.0](docs/releases/release_1.34.0.md)

## Component Documents

[CheckBox](docs/CheckBox-Example.md), [Choice](docs/Choice-Example.md), [ChoiceText](docs/ChoiceText.md), [DoubleListBox](docs/DoubleListBox.md),  [List](docs/List.md), [Radio](docs/Radio-Example.md), [InputFile](docs/InputFile.md), [Slider](docs/Slider.md), [CheckBoxGroup](docs/CheckBoxGroup.md), [ChoiceTextSearchable](docs/ChoiceTextSearchable.md)

[AlertModal](docs/AlertModal.md), [ErrorModal](docs/ErrorModal.md), [ConfirmModal](docs/ConfirmModal.md), [Modal](docs/Modal.md), [StatusBox](docs/StatusBox.md)

[Invalid](docs/Invalid.md)

[SearchSortTable](docs/SearchSortTable.md), [SimpleTable](docs/SimpleTable.md)

[ContextMenu](docs/ContextMenu.md),

[SpreadSheet](docs/SpreadSheet.md)

[Theme](docs/Theme.md)

[Search Functions](docs/SearchFunct.md), [Date Functions](docs/DateFunct.md), [Common Functions](docs/Common.md), [CSS Rule Functions](docs/CssRuleFunct.md)

[Entry Form](docs/EntryForm.md) is used to help line up components in a form.

[MenuBar](docs/MenuBar.md), [Menu Utils](docs/MenuUtils.md), [Header](docs/Header.md), [Outline](docs/Outline.md)

[Browser Detect](docs/BrowserDetect.md)

## Getting Started_

- [Short Tutorial](GettingStarted.md)
- [Example Project](https://github.com/martinjackson/simple-widgets-sample)

## CSS File Information

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
