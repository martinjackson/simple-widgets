
// Take from:
//        https://stackoverflow.com/questions/46000544/react-controlled-input-cursor-jumps/68928267#68928267

// Here's a drop-in replacement for the <input /> tag. It's a simple functional component that uses hooks to
// preserve and restore the cursor position:


import React, { useEffect, useRef, useState } from 'react'

// --------------------------------------------------------------------------------------------------------------------
const ControlledInput = (props) => {
   const { value, onChange, ...rest } = props
   const [cursor, setCursor] = useState(null)
   const ref = useRef(null)

   useEffect(() => {
      const input = ref.current
      if (input) input.setSelectionRange(cursor, cursor)
   }, [ref, cursor, value])

   const handleChange = (e) => {
      setCursor(e.target.selectionStart)
      onChange && onChange(e)
   }

   return <input ref={ref} value={value} onChange={handleChange} {...rest} />
}

export default ControlledInput

// answered Aug 25, 2021 at 18:39
// [Daniel Loiterton's user avatar](https://i.stack.imgur.com/8dtHP.jpg?s=64&g=1)
// Daniel Loiterton
// 5,064 5 gold badges 33 silver badges 46 bronze badges