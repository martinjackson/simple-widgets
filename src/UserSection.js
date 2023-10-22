import React, { useState } from 'react';
import { AlertModal, HeaderModal } from './index.js'

// ----------------------------------------------------------------------------
export const UserSection = (props) => {

  const [showModal, setShowModal] = useState(false)
  const [showAlert, setShowAlert] = useState( true )

  if (!props) {
     console.log('<UserSection> w/o props');
     return null
  }

  let userMsg  = (props.username === null) ? "User not Logged in" : 'Welcome ' + props.username

  const login  = (props.username !== null || props.loginURL === null)  ?
             null : <a href={props.loginURL} className="sw-header_link">Login</a>

  let alert = null
  if (!props.username && !props.noModalOnError) {
    const img = (props.alertLogo) ? <><img src={props.alertLogo} /><br/></> : null
    const msg = <>{img}<span>You are an unauthorized user or your login time has expired</span></>
    alert = <AlertModal show={showAlert} closeFunct={setShowAlert} message={msg} />
  }

  return (<>
            <div>
              <span>{userMsg}</span>
              {login}
              <HeaderModal show={showModal} username={props.username} closeFunct={setShowModal}/>
            </div>
            {alert}
          </>);
}

