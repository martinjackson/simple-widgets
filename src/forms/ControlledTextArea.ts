/* 
DEEP SCAN DETECTED SYNTAX ERROR
Unexpected token, expected "</>/<=/>=".
This file is not in use

import React, {useState, useRef, useEffect} from 'react'


// Taken from
//              https://stackoverflow.com/questions/46000544/react-controlled-input-cursor-jumps/70549192#70549192
// If you're using textarea, then here's the hook based on
// [Daniel Loiterton's code](https://stackoverflow.com/a/68928267/6141587)
//  using TypeScript:

interface IControlledTextArea {
    value: string
    onChange: ChangeEventHandler<HTMLTextAreaElement> | undefined
    [x: string]: any
}

const ControlledTextArea = ({ value, onChange, ...rest }: IControlledTextArea) => {
    const [cursor, setCursor] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        const input: any = ref.current
        if (input) {
            input.setSelectionRange(cursor, cursor)
        }
    }, [ref, cursor, value])

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setCursor(e.target.selectionStart)
        onChange && onChange(e)
    }

    return <textarea ref={ref} value={value} onChange={handleChange} {...rest} />
}

*/

// answered Jan 1, 2022 at 13:32
// [deadcoder0904's user avatar](https://i.stack.imgur.com/GAMZ3.jpg?s=64&g=1)
// deadcoder0904
// 7,084  12 gold badges 63 silver badges 160 bronze badges

