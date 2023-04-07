
// -----------------------------------------------------
export const label2value = (choices,label) => {
  if (!choices) return null // no data yet

  const r = choices.find((op) => op.label === label)
  return r ? r.value : null
}

// -----------------------------------------------------
export const value2label = (choices,value) => {
  if (!choices) return "" // no data yet

  const r = choices.find((op) => op.value === value)
  return r ? r.label : ""
}
