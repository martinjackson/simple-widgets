# simple-widgets

A Collection of components to make your React code simpler.

## Supports React 17.02 and React 18.x

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

- 2025-01-15 Simple-Widgets version 1.42.0 CSS files will not be automatically imported anymore.  This will make it easier for the user to override CSS files from the default CSS settings.

    The following import will need to be placed in the index.js file (to fix the break change):

    ```js
    import '../node_modules/simple-widgets/lib/index.css'
    ```

    See the section on CSS File Information.

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

## Dependencies not bundled with Simple Widgets

In order to use simple-widgets, these dependencies need to be added in the home directory of your project.

```bash
npm i @apollo/client @types/react axios deep-object-diff graphql-tag object-sizeof react react-dom --save
```



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

[Accordion](docs/Accordion.md)<br />
[AlertModal](docs/AlertModal.md)<br />
[AppCore](docs/AppCore.md)<br />
[Browser Detect](docs/BrowserDetect.md)<br />
[Carousel](docs/Carousel.md)<br />
[CheckBox](docs/CheckBox-Example.md)<br />
[CheckBoxGroup](docs/CheckBoxGroup.md)<br />
[Choice](docs/Choice-Example.md)<br />
[ChoiceText](docs/ChoiceText.md)<br />
[ChoiceTextSearchable](docs/ChoiceTextSearchable.md)<br />
[Common Functions](docs/Common.md)<br />
[ConfirmModal](docs/ConfirmModal.md)<br />
[ContextMenu](docs/ContextMenu.md)<br />
[CSS Rule Functions](docs/CssRuleFunct.md)<br />
[Date Functions](docs/DateFunct.md)<br />
[DoubleListBox](docs/DoubleListBox.md)<br />
[Entry Form](docs/EntryForm.md) is used to help line up components in a form.<br />
[ErrorModal](docs/ErrorModal.md)<br />
[Header](docs/Header.md)<br />
[InputFile](docs/InputFile.md)<br />
[Invalid](docs/Invalid.md)<br />
[Link](docs/MenuUtils.md)<br />
[List](docs/List.md)<br />
[MenuBar](docs/MenuBar.md)<br />
[Menu Utils](docs/MenuUtils.md)<br />
[Modal](docs/Modal.md)<br />
[OpenTab](docs/OpenTab.md)<br />
[Outline](docs/Outline.md)<br />
[PageTitle](docs/PageTitle.md)<br />
[ProgressCircles](docs/ProgressCircles.md)<br />
[Radio](docs/Radio-Example.md)<br />
[Redirect](docs/MenuUtils.md)<br />
[Scroll Functions](docs/ScrollFunctions.md)<br />
[Search Functions](docs/SearchFunct.md)<br />
[SearchSortTable](docs/SearchSortTable.md)<br />
[SimpleTable](docs/SimpleTable.md)<br />
[Slider](docs/Slider.md)<br />
[SpreadSheet](docs/SpreadSheet.md)<br />
[StatusBox](docs/StatusBox.md)<br />
[TextArea](docs/TextArea.md)<br />
[TextAreaError](docs/TextAreaError.md)<br />
[Theme](docs/Theme.md)<br />
[XButton](docs/XButton.md)<br />

## Getting Started_

- [Short Tutorial](GettingStarted.md)
- [Example Project](https://github.com/martinjackson/simple-widgets-sample)

## CSS File Information

[Using CSS Files](docs/UsingCSS.md)

### Build and Publish

1. npm run pack
2. npm run dry
3. npm run pub


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
