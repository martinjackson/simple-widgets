
# TODO

**WARNING:** Can not test with npm link -- app using simple-widgets will be unable to resolve react and react-dom
npm link does not behave like a regular npm installed library
Don't try testing with npm link (lost two full days, 4/6/2023 and 4/7/2023) chasing false errors:

- duplicate react error message in the browser
- app using simple-widgets will be unable to resolve react and react-dom

- Had to do  npm i --legacy-peer-deps to get npm install to work in a completely new cloned directory (no previous node_modules)
- Move calendar from simple-forms to simple-widgets, it is less complicated an removed many dependancies
- WSL paste is not keybound on laptop
- can we still use enzyme-adapter-react-16 even though we are React 17?

[ ] What to do when the list is all UpperCase and the incoming value is lowercase?

```bash

LocalChoice.js:36    name: sex value: m is not found in selection list: (3) [{…}, {…}, {…}]
LocalChoice.js:162    sex not selectable, lookup undefined does not contain  m => m
```

## general use simple-widgets that need testing

Jackson, Martin
2025-06-06 7:37 AM (3 minutes ago)

```bash
src/Accordion.js                       |   3 +-
src/AccordionSingle.js                 |   2 -
src/AlertModal.js                      |   6 +--
src/AppCore.js                         |  20 +++----
src/Carousel.js                        |   6 +--
src/CheckBox.js                        |   2 +-
src/Choice.js                          |   4 +-
src/ChoiceText.js                      |   5 +-
src/ChoiceTextSearchable.js            |   6 +--
src/Common.js                          |  14 +++--
src/ConfirmModal.js                    |   5 +-
src/DateInput.js                       |   3 +-
src/ErrorModal.js                      |   8 ++-
src/Link.js                            |  19 ++++---
src/MenuBar.js                         |  39 ++------------
src/Modal.js                           |   7 +--
src/NavigateBar.js                     |  54 ++++++++++++++-----
src/SearchSortTable.js                 |  21 ++------
src/camel.js                           |   4 +-
src/cssRulesFunct.js                   |  38 +++++++-------
```

----------------------------------------------------------------------------------------------------------------------
Q: write a unit test for src/Accordion.js

----------------------------------------------------------------------------------------------------------------------
Q: write a unit test for src/AccordionSingle.js and place it in ~/projects/simple-widgets/tests

----------------------------------------------------------------------------------------------------------------------
Q: write a unit test for src/AccordionSingle.js and save the code generated into the file named ~/projects/simple-widgets/tests/AccordionSingle.test.js

----------------------------------------------------------------------------------------------------------------------
Q: write a unit test for src/AccordionSingle.js and save the code generated into the file named ~/projects/simple-widgets/tests/AccordionSingle.test.js
Create this a bash shell script that creates the file

----------------------------------------------------------------------------------------------------------------------
Q: Create a bash shell script that takes the following list and creates a unit test for each file
src/AlertModal.js src/AppCore.js src/Carousel.js src/CheckBox.js src/Choice.js src/ChoiceText.js src/ChoiceTextSearchable.js src/Common.js src/ConfirmModal.js src/DateInput.js src/ErrorModal.js src/Link.js src/MenuBar.js src/Modal.js src/NavigateBar.js src/SearchSortTable.js src/camel.js src/cssRulesFunct.js

Q: write a unit test for each of the following files and create a bash shell script that creates each unit test
src/AlertModal.js src/AppCore.js src/Carousel.js src/CheckBox.js src/ChoiceText.js src/ChoiceTextSearchable.js src/Common.js src/ConfirmModal.js src/DateInput.js src/ErrorModal.js src/Link.js src/MenuBar.js src/Modal.js src/NavigateBar.js src/SearchSortTable.js src/camel.js src/cssRulesFunct.js

----------------------------------------------------------------------------------------------------------------------
write a unit test for src/ChoiceText.js and create a bash shell script that creates it.

----------------------------------------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------------------------

```bash
ls -l src/Accordion.js
src/AccordionSingle.js
src/AlertModal.js
src/AppCore.js
src/Carousel.js
src/CheckBox.js
src/Choice.js
src/ChoiceText.js
src/ChoiceTextSearchable.js
src/Common.js
src/ConfirmModal.js
src/DateInput.js
src/ErrorModal.js
src/Link.js
src/MenuBar.js
src/Modal.js
src/NavigateBar.js
src/SearchSortTable.js
src/camel.js
src/cssRulesFunct.js