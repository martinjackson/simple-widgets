

import { toCamelCaseVar } from '../toCamelCase.js'
import { getAppSpecificInfo } from './appSpecificInfo.js';

// ---------------------------------------------------------------------------------------------------------------------
export function formFromTableInfo(table, fields, labels) {

  const {dbStruct} = getAppSpecificInfo()

  const t = dbStruct[table];

  let dbFields = fields
    .map((colName, idx) => {
      return { ...t.fields.find(f => f.COLUMN_NAME === colName), label: labels[idx] };
    })
    .filter(f => !t.fk.includes(f.COLUMN_NAME)); // map reduce remove all fk fields

  const fieldList = dbFields.map(f => tableField2FormField(f));

  return fieldList;
}

// ---------------------------------------------------------------------------------------------------------------------
function special(fieldName) {

  switch (fieldName) {
    case "SEX":              return { type: "choice", options: ['M','F'],   }
    case "NCTR_ID":          return { type: "choice", lookup: "NCTR_ID"     }
    case "DIVISION":         return { type: "choice", lookup: "DIVISION"    }
    case "PROGRAM_ID":       return { type: "choice", lookup: "PROGRAM_ID"  }
    case "VACANCY_ID":       return { type: "choice", lookup: "VACANCY_ID"  }
    case "PAYER_ID":         return { type: "choice", lookup: "PAYER_ID"    }
    case "INSURANCE_FLAG":   return { type: "choice", options: ['Y','N'],   }
  }

return null
}

// ---------------------------------------------------------------------------------------------------------------------
function translate(dbFieldType, len, precision, step) {

  switch (dbFieldType) {
    case "CHAR":             return { type: "text", size: len, maxLength: len }
    case "VARCHAR":          return { type: "text", size: len, maxLength: len }
    case "VARCHAR2":         return { type: "text", size: len, maxLength: len }
    case "DATE":             return { type: "date", format: 'yyyy-mm-dd' }
    case "NUMBER":           return { type: "number", size: precision, maxLength: precision }
    case "FLOAT":            return { type: "number", step: step }
    // "FLOAT"    only as field ID in "SHARED.MAIL_ATTACH", "APPROVAL.MAIL_ATTACH"
    // "BLOB":     "TODO:Popup Viewer",   // only as field FILE_DATA in "SHARED.MAIL_ATTACH", "APPROVAL.MAIL_ATTACH"
  }

  return null
}

// ---------------------------------------------------------------------------------------------------------------------
function translateDBType2FieldType(dbType, fName, len, precision, scale) {

  const step = (scale && scale > 0) ? Math.pow(10, 0 - scale).toString() : null // "0.01"

  let ans = { type: "text" }

  const isSpecialField = special(fName)
  if (isSpecialField) {
    ans = isSpecialField
  } else {
    const isTranslatable = translate(dbType, len, precision, step))
    if (isTranslatable)
      ans = isTranslable

    if (ans.type === 'text' && len > 60) {
      ans.type = 'textArea'
    }

    if (dbType === 'VARCHAR2' && len === 1) {
      ans.className = "px-0 text-center w-10" // Tailwind for  {width: '2.5em', paddingRight: '0', paddingLeft: '0', textAlign: 'center'}
    }

  }

  // assign default Text Label and field variable Names if not already specified
  const phrase = fName.replace(/_/g, ' ')
  ans.name = ans.name || toCamelCaseVar(phrase)

  return ans
}

// ---------------------------------------------------------------------------------------------------------------------
export function tableField2FormField(field) {
  // "COLUMN_NAME": "CAN_CODE",
  // "DATA_TYPE": "VARCHAR2", "BLOB", "CHAR", "DATE", "FLOAT", "NUMBER", "VARCHAR2",
  // "DATA_LENGTH": 16,
  // "DATA_PRECISION": null,
  // "NULLABLE": "N"
  const ans = translateDBType2FieldType(field.DATA_TYPE, field.COLUMN_NAME, field.DATA_LENGTH, field.DATA_PRECISION, field.DATA_SCALE)
  ans.label = field.label
  ans.required = field.NULLABLE === 'N'

  return ans
}

