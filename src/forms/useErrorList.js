import {useState} from 'react'

export const useErrorList = () => {

const [errors, setErrors] = useState([])

const logErrors = (msg) => {
  // console.log('logErrors', msg);
  setErrors(prev => {
    let next = prev      // unchanged wont signal render
    if (!prev.find(item => (item == msg))) {
      prev.push(msg)          // skip duplicate messages
      next = [...prev]
    }
    return next
  })
}

return [errors, logErrors]
}

/*
How to use:
    const [errors, logErrors] = useErrorList()

    if (some error condition) {
       logErrors(error.message)
    }


      <ErrorList list={errors} />
*/