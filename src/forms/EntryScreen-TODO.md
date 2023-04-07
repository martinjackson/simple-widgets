
# Top record in <EntryScreen />  assumes single key

## EntryScreen.js lines 42-61

```js
42// --------------------------------------------------------------------------
43 function EntryScreenKeyed(props) {
44  // console.log(TS(), '== EntryScreenKeyed render ==', props)

46  const keyNames = Object.keys(props.keys)        // TODO: add code for support of multiple keys
47  const keyName = keyNames[0]                     // TODO: assumes only one key

49  const [showModal, setShowModal]   = useState(false)
50  const [cloneRec, setCloneRec]     = useState(false)
51  const [newRecList, setNewRecList] = useState([])

53  const [keyId, setKeyId] = useState(props.keys[keyName])              // TODO: assumes only one key
54  const [data, setData]   = useState(null)

56  const [errors, logErrors] = useErrorList()

58  const [needsLoading, setNeedsLoading] = useState(true)

60  const recordName = props.recordName
61  const where = { ...props.keys, [keyName]: keyId }
```

```js
53   const [keyId, setKeyId] = useState(props.keys[keyName])              // TODO: assumes only one key
126  setKeyId(newId)
150  setKeyId(change.target.value)
```
