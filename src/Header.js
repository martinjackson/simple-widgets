import React, { useState } from 'react';
import { AlertModal } from './AlertModal'

import { getList } from './encrypt.js'
import { HeaderModal } from './HeaderModal'

export const Header = (props) => {

  const [showModal, setShowModal] = useState(false)
  const [showAlert, setShowAlert] = useState( true )

  if (!props) {
     console.log('<Header> w/o props');
     return null
  }

  const title       = (props.title)                   ? props.title           : ''
  const dbType      = (props.dbType && props.dbType.length > 0) ? props.dbType + ' DB'  : ''
  const username    = (props.username)                ? props.username        : ''
  const titleLogo   = (props.titleLogo !== undefined) ? props.titleLogo       : ''
  const alertLogo   = (props.alertLogo !== undefined) ? props.alertLogo       : ''
  const logoutURL   = (props.logoutURL)               ? props.logoutURL       : ''
  const loginURL    = (props.loginURL)                ? props.loginURL        : ''
  const setUsername = (props.setUsername)             ? props.setUsername     : () => {console.log('no setUsername fn() passed to Header.');}

  let userMsg  = (username === null) ? "User not Logged in" : 'Welcome: ' + username

  const logout = (username === null || logoutURL === null) ?
             null : <a href={logoutURL} className="sw-header_link">Logout</a>

  const login  = (username !== null || loginURL === null)  ?
             null : <a href={loginURL} className="sw-header_link">Login</a>

  let modalButton = null
  if (getList().find(p => p === username)) {
        modalButton = <button id="sw-modalButton" onClick={() => setShowModal(true)}>.</button>
  }

  let alert = null
  if (!username && !props.noModalOnError) {
    const img = (alertLogo) ? <><img src={alertLogo} /><br/></> : null
    const msg = <>{img}<span>You are an unauthorized user or your login time has expired</span></>
    alert = <AlertModal show={showAlert} closeFunct={setShowAlert} message={msg} />
  }

  const userSection = (props.hideUserSection) ? <></> : <span className="sw-header_link">{userMsg}{modalButton}</span>

  const titleImg = (titleLogo !== null) ? <img src={titleLogo} alt="Logo" className="sw-header_logo" /> : null
  return (<header id="header">
            <div className="sw-header_div">
              {titleImg}
              <h1 className="sw-header_title">{title}</h1>
              {userSection}
              <div className="sw-header_column">
              {logout}
                {dbType}
              </div>
              {login}
              <HeaderModal show={showModal} username={username} setUser={setUsername} closeFunct={setShowModal}/>
            </div>
            {alert}
          </header>);
}

