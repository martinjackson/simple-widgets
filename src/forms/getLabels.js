import { getAppSpecificInfo } from './model/appSpecificInfo.js';

// ----------------------------------------------------------------------------------------------------------------------------------------------
export function getLabels(formName) {
  const { formDictionary } = getAppSpecificInfo();

  let labels = [];
  const formStructure = formDictionary(formName);
  if (formStructure) {
    labels = formStructure.fieldList.map(f => f.label);
  } else {
    console.log('getting form labels for unknown:', formName);
  }
  return labels;
}
