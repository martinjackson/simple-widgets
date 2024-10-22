
# Things changed but lost on master branch

cSpell:ignore snyk jimabele

## "fix: upgrade react-spinners from 0.13.8 to 0.14.0"  [snyk-bot]  (17 Jul 2024 02:34:24 -05:00)  1f21d63b04b3e3018c92eb7f3b1c3064993c6a7f

- **File: ~\projects\simple-widgets\package.json**

```json
    "react-spinners": "^0.13.8",
    "react-spinners": "^0.14.0",
```

## "Fixed merge conflict."  [jimabele]   (12 Dec 2023 13:53:03 -06:00)  087c728346744c10ffa85151f81ed3b3d69f0f22

- **File: ~\projects\simple-widgets\src\forms\EntryScreen.js**

the following removed from  function EntryScreenKeyed(props) {

```json
  useEffect(() => {
    setKeys(props.keys)
  }, [props.keys])

  useEffect(() => {

    if (hasNonNullKeys(keys) && !needsLoading) {
      setNeedsLoading(true)
    }

  }, [keys, needsLoading])
```
