import React, {useEffect} from 'react';

function newTab(url, target='_blank') {
  console.log('newTab url:', url, 'target:', target)
  window.open(url, target)
}

// ------------------------------------------------------------------------
export function OpenTab(props) {

  useEffect(() => {

    if (props.target) {
      newTab(props.url, props.target)
    } else {
      newTab(props.url)
    }

    const cleanUp = () => {

    }
    return cleanUp
  }, [props.url, props.target])

  console.log('OpenTab url:', props.url)



  return (
    <div className='OpenTab' style={props.style}>
      If a new browser tab does not open, then click <a href={props.url}>here</a>.
    </div>
  )
}
