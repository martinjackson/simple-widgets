
# Where businessLogic is referenced in simple-widgets

## src/forms/EntryScreen.js

### Call

- 96:   props.businessLogic(change, data)
- 180:  const ok = props.businessLogic(change, data, moreChanges)

## src/forms/Form.js

### Pass

- 168:  businessLogic={props.businessLogic}
- 262:  businessLogic={props.businessLogic}

## src/forms/FormFields.js

### Pass

- 40:   f.businessLogic = formInfo.businessLogic
- 189:  const businessLogic = (props.businessLogic) ? props.businessLogic : (old, changed) => [changed, {}]
- 201:  businessLogic,

### Call

- 278:  const [modState, formOpts] = businessLogic(data, incomingChange_PropsData)

----------------------------------------------------------------------------------------------------------

# Where onChangeSpecial is referenced in simple-widgets

## src/forms/EntryScreen.js

176:  const onChangeSpecial = (change, moreChanges) => {

245:      onChangeSpecial={onChangeSpecial}

## src/forms/SimpleEntryScreen.js

115:        onChangeSpecial={props.onChangeSpecial}

## src/forms/Form.js

111:      const handled = props.onChangeSpecial(change, moreChanges);

230:    if (props.onChangeSpecial) {

231:      handled = props.onChangeSpecial(change, moreChanges);
