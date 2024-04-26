import React, {useEffect} from 'react';

function NewTab(url) {
  window.open(url, "_blank")
}

// ------------------------------------------------------------------------
export function OpenTab(props) {

  useEffect(() => {

    NewTab(props.url)

    const cleanUp = () => {

    }
    return cleanUp
  }, [props.url])

  console.log('OpenTab url:', props.url)



  return (
    <div className='OpenTab' style={props.style}>
      If a new browser tab does not open, then click <a href={props.url}>here</a>.
    </div>
  )
}
