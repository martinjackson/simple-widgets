
let appSpecificInfo = {}

export const setAppSpecificInfo = ({dbStruct, formDictionary, namedQueries}) => {
  appSpecificInfo = {dbStruct, formDictionary, namedQueries}
}

export const getAppSpecificInfo = () => { return appSpecificInfo }

// import { getAppSpecificInfo } from './model/appSpecificInfo.js'
// const {dbStruct, formDictionary, namedQueries} = getAppSpecificInfo()