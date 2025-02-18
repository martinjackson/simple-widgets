Need to install the following packages:
gen_named_exports@0.9.3
Ok to proceed? (y) 

// cSpell:ignore


// scanning src
// Error parsing src/CheckBox.jsx src/CheckBox.jsx.jsx
// Error parsing src/AlertModal.jsx src/AlertModal.jsx.jsx
// Error parsing src/AppCore.jsx src/AppCore.jsx.jsx
// Error parsing src/ConfirmModal.jsx src/ConfirmModal.jsx.jsx
// Error parsing src/ChoiceTextSearchable.jsx src/ChoiceTextSearchable.jsx.jsx
// Error parsing src/ChoiceText.jsx src/ChoiceText.jsx.jsx
// Error parsing src/Choice.jsx src/Choice.jsx.jsx
// Error parsing src/ContextMenu.jsx src/ContextMenu.jsx.jsx
// Error parsing src/DateInput.jsx src/DateInput.jsx.jsx
// Error parsing src/ErrorModal.jsx src/ErrorModal.jsx.jsx
// Error parsing src/HeaderModal.jsx src/HeaderModal.jsx.jsx
// Error parsing src/CheckBoxGroup.jsx src/CheckBoxGroup.jsx.jsx
// Error parsing src/Home.jsx src/Home.jsx.jsx
// Error parsing src/List.jsx src/List.jsx.jsx
// Error parsing src/Header.jsx src/Header.jsx.jsx
// Error parsing src/InputFile.jsx src/InputFile.jsx.jsx
// Error parsing src/Link.jsx src/Link.jsx.jsx
// Error parsing src/Modal.jsx src/Modal.jsx.jsx
// Error parsing src/Invalid.jsx src/Invalid.jsx.jsx
// Error parsing src/OpenTab.jsx src/OpenTab.jsx.jsx
// Error parsing src/MenuBar.jsx src/MenuBar.jsx.jsx
// Error parsing src/PageTitle.jsx src/PageTitle.jsx.jsx
// Error parsing src/Outline.jsx src/Outline.jsx.jsx
// Error parsing src/NavigateBar.jsx src/NavigateBar.jsx.jsx
// Error parsing src/Redirect.jsx src/Redirect.jsx.jsx
// Error parsing src/ProgressCircles.jsx src/ProgressCircles.jsx.jsx
// Error parsing src/Radio.jsx src/Radio.jsx.jsx
// Error parsing src/SimpleTable.jsx src/SimpleTable.jsx.jsx
// Error parsing src/StatusBox.jsx src/StatusBox.jsx.jsx
// Error parsing src/DoubleListBox.jsx src/DoubleListBox.jsx.jsx
// Error parsing src/SpreadSheet.jsx src/SpreadSheet.jsx.jsx
// Error parsing src/Slider.jsx src/Slider.jsx.jsx
// Error parsing src/UserSection.jsx src/UserSection.jsx.jsx
// Error parsing src/forms/Button.jsx src/forms/Button.jsx.jsx
// Error parsing src/forms/ErrorList.jsx src/forms/ErrorList.jsx.jsx
// Error parsing src/forms/ControlledTextarea.jsx src/forms/ControlledTextarea.jsx.jsx
// Error parsing src/forms/FieldGenerator.jsx src/forms/FieldGenerator.jsx.jsx
// Error parsing src/forms/Form.jsx src/forms/Form.jsx.jsx
// Error parsing src/forms/FormFields.jsx src/forms/FormFields.jsx.jsx
// Error parsing src/forms/DatabaseLoadingIcon.jsx src/forms/DatabaseLoadingIcon.jsx.jsx
// Error parsing src/forms/EntryScreen.jsx src/forms/EntryScreen.jsx.jsx
// Error parsing src/forms/Gears.jsx src/forms/Gears.jsx.jsx
// Error parsing src/forms/ControlledInput.jsx src/forms/ControlledInput.jsx.jsx
// Error parsing src/forms/FormHeader.jsx src/forms/FormHeader.jsx.jsx
// Error parsing src/SearchSortTable.jsx src/SearchSortTable.jsx.jsx
// Error parsing src/forms/FormTable.jsx src/forms/FormTable.jsx.jsx
// Error parsing src/forms/NarrowForm.jsx src/forms/NarrowForm.jsx.jsx
// Error parsing src/forms/MakeModal.jsx src/forms/MakeModal.jsx.jsx
// Error parsing src/forms/Show.jsx src/forms/Show.jsx.jsx
// Error parsing src/forms/Input.jsx src/forms/Input.jsx.jsx
// Error parsing src/forms/SimpleEntryScreen.jsx src/forms/SimpleEntryScreen.jsx.jsx
// Error parsing src/forms/FormChoice.jsx src/forms/FormChoice.jsx.jsx
// Error parsing src/forms/SimpleDataTable.jsx src/forms/SimpleDataTable.jsx.jsx
// Error parsing src/forms/genRowBuilder.jsx src/forms/genRowBuilder.jsx.jsx
// Error parsing src/forms/img/FormImages.jsx src/forms/img/FormImages.jsx.jsx
// files with no named exports:  ["AlertModal.jsx","AppCore.jsx","CheckBox.jsx","CheckBoxGroup.jsx","Choice.jsx","ChoiceText.jsx","ChoiceTextSearchable.jsx","ConfirmModal.jsx","ContextMenu.jsx","DateInput.jsx","DoubleListBox.jsx","ErrorModal.jsx","Header.jsx","HeaderModal.jsx","Home.jsx","InputFile.jsx","Invalid.jsx","Link.jsx","List.jsx","MenuBar.jsx","Modal.jsx","NavigateBar.jsx","OpenTab.jsx","Outline.jsx","PageTitle.jsx","ProgressCircles.jsx","Radio.jsx","Redirect.jsx","SearchSortTable.jsx","SimpleTable.jsx","Slider.jsx","SpreadSheet.jsx","StatusBox.jsx","UserSection.jsx","forms/Button.jsx","forms/ControlledInput.jsx","forms/ControlledTextarea.jsx","forms/DatabaseLoadingIcon.jsx","forms/EntryScreen.jsx","forms/ErrorList.jsx","forms/FieldGenerator.jsx","forms/Form.jsx","forms/FormChoice.jsx","forms/FormFields.jsx","forms/FormHeader.jsx","forms/FormTable.jsx","forms/Gears.jsx","forms/Input.jsx","forms/MakeModal.jsx","forms/NarrowForm.jsx","forms/Show.jsx","forms/SimpleDataTable.jsx","forms/SimpleEntryScreen.jsx","forms/genRowBuilder.jsx","forms/newRecRowSelected.js","forms/img/FormImages.jsx"]

import { formatMoney, sanitize } from './Common.js' 
import { addDigit, convertDate, currentDBDate, currentDBDateTime, currentDate, currentDateTime, dateTime, dbDate, monthName } from './DateFunct.js' 
import { binSearch, search } from './SearchFunct.js' 
import { generateButton, generateCSSButton, generateCSSDefaultButton } from './Theme.js' 
import { isBlink, isChrome, isEdge, isEdgeChromium, isFirefox, isIE, isOpera, isSafari } from './browserDetect.js' 
import { toCamelCase } from './camel.js' 
import { deleteCssRule, findCssRule, findStyleSheet, insertCssRule, printCssRules } from './cssRulesFunct.js' 
import { date2str } from './date2str.js' 
import { lastOfMonth, todayString } from './dateUtils.js' 
import { createStoreItem, openGeneralStore, useStoreItem } from './generalStore.js' 
import { getUrlPath } from './getUrlPath.js' 
import { hasOwnProperty } from './hasOwnProperty.js' 
import { localStrToDate } from './localStrToDate.js' 
import { makeChangeHandler } from './makeChangeHandler.js' 
import { printStackTrace } from './printStackTrace.js' 
import { TS, dTS, now } from './time.js' 
import { applyOptions, exampleFields } from './forms/DefaultFormElements.js' 
import { applyDeepValueChange, getRecordKeyInfo } from './forms/applyDeepValueChange.js' 
import { arrLen } from './forms/arrLen.js' 
import { capWords } from './forms/capWords.js' 
import { dataLog, getDataLog } from './forms/dataLog.js' 
import { dispAsString } from './forms/dispAsString.js' 
import { dumbFlattenJSON, flattenJSON } from './forms/flattenJSON.js' 
import { genEmptyRecord } from './forms/genEmptyRecord.js' 
import { getGqlName, getKeyValues } from './forms/getKeyValues.js' 
import { getLabels } from './forms/getLabels.js' 
import { getSubRecord } from './forms/getSubRecord.js' 
import { ignoreCase } from './forms/ignoreCase.js' 
import { isFunction } from './forms/isFunction.js' 
import { isNotEmpty } from './forms/isNotEmpty.js' 
import { isPromise } from './forms/isPromise.js' 
import { createJobStatus, updateJobStatus, watchJobStatus } from './forms/jobs.js' 
import { label2value, value2label } from './forms/label2value.js' 
import { logDiff } from './forms/logDiff.js' 
import { addLookupAlias, addNotify, calcLookupMemoryUse, changeLookupAlias, defineLookup, fetchLookupData, getLookupLogs, getLookupSummary, isLookupDone, loadSerializedLookups, lookupLog, notifyLookupsDone, refreshLookup, removeNotify, serializeLookups, setLookupData, startLookup } from './forms/lookupUtil.js' 
import { newRecord } from './forms/newRecord.js' 
import { onFormChange } from './forms/onFormChange.js' 
import { prop2str } from './forms/prop2str.js' 
import { removeIllegalAttributes } from './forms/removeIllegalAttributes.js' 
import { removeTypeName } from './forms/removeTypeName.js' 
import { sendEmail } from './forms/sendMail.js' 
import { stackTrace } from './forms/stackTrace.js' 
import { toCamelCaseVar, toEnglishPhrase } from './forms/toCamelCase.js' 
import { useErrorList } from './forms/useErrorList.js' 
import { useFetch } from './forms/useFetch.js' 
import { valueCompare } from './forms/valueCompare.js' 
import { getAppSpecificInfo, setAppSpecificInfo, setAppSpecificInfoExample } from './forms/model/appSpecificInfo.js' 
import { formDictionary } from './forms/model/bootstrapDictionary.js' 
import { formFromTableInfo, tableField2FormField } from './forms/model/formFromTableInfo.js' 
import { genDictionaryEntry } from './forms/model/genDictionaryEntry.js' 
import { getTableColumns } from './forms/model/getTableColumns.js' 
import { findTableByGqlName, getGqlFieldNames, getGqlPKs, getTablePKs } from './forms/model/getTablePKs.js' 
import { listNotKeyedTables } from './forms/model/list-non-keyed-tables.js' 

export {
formatMoney,sanitize,
addDigit,convertDate,currentDBDate,currentDBDateTime,currentDate,currentDateTime,dateTime,dbDate,monthName,
binSearch,search,
generateButton,generateCSSButton,generateCSSDefaultButton,
isBlink,isChrome,isEdge,isEdgeChromium,isFirefox,isIE,isOpera,isSafari,
toCamelCase,
deleteCssRule,findCssRule,findStyleSheet,insertCssRule,printCssRules,
date2str,
lastOfMonth,todayString,
createStoreItem,openGeneralStore,useStoreItem,
getUrlPath,
hasOwnProperty,
localStrToDate,
makeChangeHandler,
printStackTrace,
TS,dTS,now,
applyOptions,exampleFields,
applyDeepValueChange,getRecordKeyInfo,
arrLen,
capWords,
dataLog,getDataLog,
dispAsString,
dumbFlattenJSON,flattenJSON,
genEmptyRecord,
getGqlName,getKeyValues,
getLabels,
getSubRecord,
ignoreCase,
isFunction,
isNotEmpty,
isPromise,
createJobStatus,updateJobStatus,watchJobStatus,
label2value,value2label,
logDiff,
addLookupAlias,addNotify,calcLookupMemoryUse,changeLookupAlias,defineLookup,fetchLookupData,getLookupLogs,getLookupSummary,isLookupDone,loadSerializedLookups,lookupLog,notifyLookupsDone,refreshLookup,removeNotify,serializeLookups,setLookupData,startLookup,
newRecord,
onFormChange,
prop2str,
removeIllegalAttributes,
removeTypeName,
sendEmail,
stackTrace,
toCamelCaseVar,toEnglishPhrase,
useErrorList,
useFetch,
valueCompare,
getAppSpecificInfo,setAppSpecificInfo,setAppSpecificInfoExample,
formDictionary,
formFromTableInfo,tableField2FormField,
genDictionaryEntry,
getTableColumns,
findTableByGqlName,getGqlFieldNames,getGqlPKs,getTablePKs,
listNotKeyedTables,
}
