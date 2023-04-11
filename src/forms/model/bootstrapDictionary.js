/*eslint no-undef: "error"*/
/*eslint-env node*/

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')


import { TS } from '../time.js'

import { genDictionaryEntry } from './genDictionaryEntry.js'
import { formFromTableInfo } from './formFromTableInfo.js'

const tables = [
  {
      table: 'SEPS.PERSON',
      gqlName: 'person',
      dbFields: ["NCTR_ID", "DEGREE", "COUNTRY", "SEX", "SCHOOL", "DEGREE_COMMENT", "VISA_NOTE", "PERSON_NOTE"],
      labels: ["Staff", "Degree", "Country", "Gender", "School", "Deg Comment", "Visa", "Note"],
  },
  {
      table: 'SEPS.APPOINTMENT',
      gqlName: 'appointment',
      // dbFields: getTableColumns('SEPS.APPOINTMENT')  // 'APPOINTMENT_ID', 'NCTR_ID', 'PROGRAM_ID', 'APPT_START_DATE', 'APPT_END_DATE', 'DIVISION', 'FTE', 'MENTOR', 'RELOCATION_AMT', 'APPT_NOTE', 'INSURANCE_FLAG', 'RELOCATION_DATE', 'VACANCY_ID', 'VAC_FOR_APPT'
      dbFields: ['APPT_START_DATE', 'APPT_END_DATE', 'DIVISION', 'INSURANCE_FLAG', 'FTE', 'MENTOR', 'PROGRAM_ID', 'RELOCATION_AMT', 'RELOCATION_DATE',
      'APPT_NOTE'],
      labels: ['Start Date', 'End Date', 'Division', 'Ins', 'FTE', 'Mentor', 'Program', 'Reloc Amt', 'Reloc Date', 'Note']
  },
  {
      table: 'SEPS.STIPEND',
      gqlName: 'stipend',
      // dbFields: getTableColumns('SEPS.STIPEND')  // ['APPOINTMENT_ID', 'STIPEND_ID', 'STIPEND_START_DATE', 'STIPEND_END_DATE', 'STIPEND_AMOUNT', 'STIPEND_NOTE', 'VACANCY_ID']
      dbFields: ['STIPEND_START_DATE', 'STIPEND_END_DATE', 'STIPEND_AMOUNT', 'STIPEND_NOTE'],
      labels: ['Start Date', 'End Date', 'Amount', 'Note']
  },
  {
      table: 'SEPS.APPT_PAYER',
      gqlName: 'payer',
      // dbFields: getTableColumns('SEPS.APPT_PAYER')  // ['APPOINTMENT_ID', 'PAYER_ID', 'AP_PERCENT', 'AP_NOTE', 'STIPEND_ID', 'VACANCY_ID']
      dbFields: ['PAYER_ID', 'AP_PERCENT', 'AP_NOTE'],
      labels: ['Payer', '%', 'Note']
  },
  ]

export const formDictionary = (search) => {

  if (search.table) {
    return tables.find(item => item.table == search.table)
  }

  if (search.gqlName) {
    return tables.find(item => item.gqlName == search.gqlName)
  }

  console.log(TS(), 'missing formStructure:', search);

  return [];


}



  /*
  entryUtil (line 220) formItems:
{SEPS.PERSON: Array(8), SEPS.APPOINTMENT: Array(10), SEPS.STIPEND: Array(4), SEPS.APPT_PAYER: Array(3)}

const formItems = {
SEPS.APPOINTMENT: [
 {type: 'date', format: 'yyyy-mm-dd', name: 'apptStartDate', label: 'Start Date', required: false}
 {type: 'date', format: 'yyyy-mm-dd', name: 'apptEndDate', label: 'End Date', required: false}
 {type: 'choice', options: Array(75), name: 'division', label: 'Division', required: false}
 {type: 'choice', options: Array(2), name: 'insuranceFlag', label: 'Ins', required: false}
 {type: 'number', size: 4, maxLength: 4, name: 'fte', label: 'FTE', …}
 {type: 'text', size: 20, maxLength: 20, name: 'mentor', label: 'Mentor', …}
 {type: 'choice', options: Array(1), name: 'programId', label: 'Program', required: false}
 {type: 'number', size: 7, maxLength: 7, name: 'relocationAmt', label: 'Reloc Amt', …}
 {type: 'date', format: 'yyyy-mm-dd', name: 'relocationDate', label: 'Reloc Date', required: false}
 {type: 'textArea', size: 250, maxLength: 250, name: 'apptNote', label: 'Note', …}
],

SEPS.APPT_PAYER: [
 {type: 'choice', options: Array(1), name: 'payerId', label: 'Payer', required: false}
 {type: 'number', size: null, maxLength: null, name: 'apPercent', label: '%', …}
 {type: 'textArea', size: 250, maxLength: 250, name: 'apNote', label: 'Note', …}
],

SEPS.PERSON: [
 {type: 'choice', options: Array(11087), name: 'nctrId', label: 'Staff', required: false}
 {type: 'text', size: 20, maxLength: 20, name: 'degree', label: 'Degree', …}
 {type: 'text', size: 20, maxLength: 20, name: 'country', label: 'Country', …}
 {type: 'choice', options: Array(2), name: 'sex', label: 'Gender', required: false}
 {type: 'text', size: 50, maxLength: 50, name: 'school', label: 'School', …}
 {type: 'textArea', size: 250, maxLength: 250, name: 'degreeComment', label: 'Deg Comment', …}
 {type: 'textArea', size: 250, maxLength: 250, name: 'visaNote', label: 'Visa', …}
 {type: 'textArea', size: 250, maxLength: 250, name: 'personNote', label: 'Note', …}
],

SEPS.STIPEND: [
 {type: 'date', format: 'yyyy-mm-dd', name: 'stipendStartDate', label: 'Start Date', required: false}
 {type: 'date', format: 'yyyy-mm-dd', name: 'stipendEndDate', label: 'End Date', required: false}
 {type: 'number', size: 8, maxLength: 8, name: 'stipendAmount', label: 'Amount', …}
 {type: 'textArea', size: 250, maxLength: 250, name: 'stipendNote', label: 'Note', …}
]

*/



  // 'SEPS.PERSON',       "pk": ["NCTR_ID"],
  // 'SEPS.APPOINTMENT',  "pk": ["APPOINTMENT_ID"],                           "fk": ["NCTR_ID"],
  // 'SEPS.STIPEND',      "pk": ["APPOINTMENT_ID","STIPEND_ID"],	            "fk": ["APPOINTMENT_ID"],
  // 'SEPS.APPT_PAYER'    "pk": ["APPOINTMENT_ID","PAYER_ID","STIPEND_ID"],	"fk": ["APPOINTMENT_ID"],

  // RTP data spelunking
  //    SEPS.PERSON NCTR_IDs with change since last May (25 poeple)
  //       diff 2021-11-15-17-12-18-160/SEPS.PERSON.table 2021-05-20-20-16-16-094/SEPS.PERSON.table
  //
  //            20556,20894,20801,19869,20890,20871,20877,20881,20761,18803,
  //            20431,20883,20888,20198,20212,20600,20765,20836,20527,20815,
  //            20799,20873,20477,20469,20867
  //






// ---------------------------------------------------------------------------------------------------------------------
// eslint-disable-next-line no-unused-vars
const showToDo = (named, data) => {

  return (data) ? data : [`TODO: lookup(${named})`]           // could not find the names or it's data hasn't loaded yet
}






/*

const MIStyle="px-0 text-center w-10"      // Tailwind for  {width: '2.5em', paddingRight: '0', paddingLeft: '0', textAlign: 'center'}

example fields
const fields = {
  firstName:    { type: "text",      name: "firstName",    text: "First Name",    placeholder: 'Jack',          required: true },
  midItial:     { type: "text",      name: "midItial",     text: "M.I.",          placeholder: 'E',             required: false,  size:1, maxLength: 1, className: MIStyle},
  email:        { type: "email",     name: "email",        text: "Email",         placeholder: 'jack@mail.com', required: true },
  startDate:    { type: "date",      name: "startDate",    text: "Start Date",    format: 'yyyy-mm-dd',         required: true },
  password:     { type: "password",  name: "password",     text: "Password",                                    required: true },
  admin:        { type: "chkBox",    name: "admin",        text: "Admin",         selectedValue: "Y" },
  event:        { type: "choice",    name: "eventCode",    text: "Event",                            },
  times:        { type: "chkBoxes",  name: "times",        text: "Meeting Times",                    },
  comments:     { type: "textArea",  name: "comments",     text: "Comments",  placeholder: 'place your comments here...', required: false },
}
*/

// ---------------------------------------------------------------------------------------------------------------------
const populateDictionary = () => {

  tables.forEach((entry,i) => {
    const fieldList = formFromTableInfo(entry.table, entry.dbFields, entry.labels)
    tables[i]["fieldList"] = fieldList
  })

  console.log(TS(), 'const tables =', JSON.stringify(tables, null, 2));

  console.log(`

import { TS } from './time.js'

export const formDictionary = (search) => {

  if (search.table) {
    return tables.find(item => item.table == search.table)
  }

  if (search.gqlName) {
    return tables.find(item => item.gqlName == search.gqlName)
  }

  console.log(TS(), 'missing formStructure:', search);
  return [];

}

  `)
}

const argv = yargs(hideBin(process.argv))
  .option("tables", {
    alias: "t",
    description: "table names to generate entry fields",
  })
  .option("populateDictionary", {
    alias: "p",
    description: "complete the partially defined dictionary",
  })
  .help()
  .alias("help", "h").argv;

if (argv.tables) {
  genDictionaryEntry(argv.tables)
} else {
  populateDictionary()
}


