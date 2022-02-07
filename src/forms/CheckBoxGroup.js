import React, {useState} from "react";
import CheckBox from '../CheckBox';

const CheckBoxGroup = ({
  choices,
  name,
  values,
  onChange,
  className
}) => {

  if (!choices)
    choices = []

  const n = choices.length
  if (!values)
     values = Array(n).fill("")

  const [items, setItems] = useState(values);  // assumed values is an array

  const setOneItem = e => {
    let arr = [...items]
    arr[e.target.name] = e.target.value
    setItems(arr);

    e.target.name = name     // synthesize entire group change on any change
    e.target.value = arr
    onChange(e)
  };

  if (choices.length === 0)  // need a non empty div for layout
  return (
    <div className={className}>
      &nbsp; &nbsp; &nbsp; &nbsp;
    </div>
  );


  return (
    <div className={className}>
      {choices.map( (word,idx) =>
        <CheckBox
          key={idx}
          id={name+'-'+idx}
          selectedValue={word}
          text={word}
          name={idx}
          value={items[idx]}
          onChange={setOneItem}
        />
      )}
    </div>
  );
};

export default CheckBoxGroup;
