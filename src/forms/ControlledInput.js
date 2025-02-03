
// cSpell:ignore Loiterton

// Take from:
//        https://stackoverflow.com/questions/46000544/react-controlled-input-cursor-jumps/68928267#68928267

// Here's a drop-in replacement for the <input /> tag. It's a simple functional component that uses hooks to
// preserve and restore the cursor position:


import React, { useEffect, useRef, useState } from 'react'

/*
// https://stackoverflow.com/questions/33406169/failed-to-execute-setselectionrange-on-htmlinputelement-the-input-elements

// --------------------------------------------------------------------------------------------------------------------
function onInputFocus(event) {
  const target = event.currentTarget;

  target.type = 'text';
  target.setSelectionRange(0, target.value.length);
  target.type = 'number';
}
*/

// --------------------------------------------------------------------------------------------------------------------
export const ControlledInput = (props) => {
   const { value, onChange, ...rest } = props
   const [cursor, setCursor] = useState(null)
   const ref = useRef(null)

   useEffect(() => {
      const target = ref.current
      if (target) {
        const prev = (target.type) ? target.type : 'text'
        target.type = 'text';
        target.setSelectionRange(cursor, cursor)
        target.type = prev    // set it back to number or date, should be same as props.type
      }
   }, [ref, cursor, value])

   const handleChange = (e) => {
      setCursor(e.target.selectionStart)
      onChange && onChange(e)
   }

   return <input ref={ref} value={value} onChange={handleChange} {...rest} />
}

// answered Aug 25, 2021 at 18:39
// [Daniel Loiterton's user avatar](https://i.stack.imgur.com/8dtHP.jpg?s=64&g=1)
// Daniel Loiterton
// 5,064 5 gold badges 33 silver badges 46 bronze badges