
const newRecRowSelected = (rowSelected) => {
  console.log('rowSelected:', rowSelected);

  const recordType = genRecordTypeFromName(props.recordName)
  const empty = genEmptyRecord(recordType, true)
  const legalFields = Object.keys(empty)
  const incomingFields = Object.keys(rowSelected)
  const goodFields = incomingFields.filter(f => legalFields.includes(f))
  const keyNames = Object.keys(keys)
  const goodKeys = incomingFields.filter(f => keyNames.includes(f))

  if (cloneRec) {
    if (data) { // clone from previous data
      goodFields.forEach(f => {
        data[props.recordName][0][f] = rowSelected[f]
      })
    }
  } else { // empty record
    console.log('Creating Empty Record[',recordType,']', empty);

    goodFields.forEach(f => {
      empty[f] = rowSelected[f]
    })
    setData({ [props.recordName]: [empty] })

    // TODO: comes from  genPickListOfNew() and is not the normal lookup for the first field

  }

  const newKeys = {}
  goodKeys.forEach(f => {
    newKeys[f] = rowSelected[f]
  })
  setKeys(newKeys)
  setShowModal(false)
}

