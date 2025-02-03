
// cSpell:ignore Parms Funct

import React, { useState } from 'react';
import { AlertModal, HeaderModal } from './index.js'

// ----------------------------------------------------------------------------
export const Header = (props) => {

  const [showModal, setShowModal] = useState(false)
  const [showAlert, setShowAlert] = useState( true )

  if (!props) {
     console.log('<Header> w/o props');
     return null
  }

  const title       = (props.title)                   ? props.title           : ''
  const dbDisplay   = (props.dbDisplay && props.dbDisplay.length > 0) ? props.dbDisplay + ' DB'  : ''
  const username    = (props.username)                ? props.username        : ''
  const titleLogo   = (props.titleLogo !== undefined) ? props.titleLogo       : ''
  const alertLogo   = (props.alertLogo !== undefined) ? props.alertLogo       : ''
  const logoutURL   = (props.logoutURL)               ? props.logoutURL       : ''
  const loginURL    = (props.loginURL)                ? props.loginURL        : ''
  const setUsername = (props.setUsername)             ? props.setUsername     : () => {console.log('no setUsername fn() passed to Header.');}

  let userMsg  = (username === null) ? "You are not logged in" : 'Welcome: ' + username

  const defLogoutFn = () => {
    if (logoutURL != null) {
      window.location.href = logoutURL       // <a href={logoutURL} className="sw-header_link">Logout</a>
    } else {
      console.log('user clicked logout, but logoutURL:', logoutURL);
    }
  }

  const logoutFn = (props.logoutFn) ? props.logoutFn : defLogoutFn
  const logout = <button className="sw-header_link" onClick={logoutFn}>Logout</button>
  const login  = ('loginURL' in props) ? <a href={loginURL} className="sw-header_link">Login</a> : null
  const logInOut = ('username' in props && props.username != null) ? logout : login

  let alert = null
  if (!username && !props.noModalOnError) {
    const img = (alertLogo) ? <><img src={alertLogo} /><br/></> : null
    const msg = <>{img}<span>You are an unauthorized user or your login time has expired</span></>
    alert = <AlertModal show={showAlert} closeFunct={setShowAlert} message={msg} />
  }

  const userSection = (props.hideUserSection) ? <></> : <span className="sw-header_link">{userMsg}</span>

  const titleImg = (titleLogo !== null) ? <img src={titleLogo} alt="Logo" className="sw-header_logo" /> : null
  return (<header id="header">
            <div className="sw-header_div">
              {titleImg}
              <h1 className="sw-header_title">{title}</h1>
              {userSection}
              <div className="sw-header_column">
              {logInOut}
              {dbDisplay}
              </div>

              <HeaderModal show={showModal} username={username} setUser={setUsername} closeFunct={setShowModal}/>
            </div>
            {alert}
          </header>);
}

