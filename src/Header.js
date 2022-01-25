import React, { useState, useEffect } from 'react';
import AlertModal from './AlertModal'

import { getList } from './encrypt.js'
import HeaderModal from './HeaderModal'

const Header = (props) => {

  const [showModal, setShowModal] = useState(false)
  const [showAlert, setShowAlert] = useState( true )

  if (!props) {
     console.log('<Header> w/o props');
     return null
  }

  const envTitle  = window.env.title ? window.env.title : ""
  const envDBType = window.env.DB_TYPE ? window.env.DB_TYPE : ""

  const title     = (props.title)     ? props.title      : envTitle
  const dbType    = (props.dbType)    ? props.dbType     : envDBType
  const username  = (props.username)  ? props.username   : window.env.username
  const titleLogo = (props.titleLogo) ? props.titleLogo  : window.env.titleLogo
  const alertLogo = (props.alertLogo) ? props.alertLogo  : window.env.alertLogo
  const logoutURL = (props.logoutURL) ? props.logoutURL  : window.env.logoutURL
  const loginURL  = (props.loginURL)  ? props.loginURL  : window.env.loginURL

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
  if (!username) {
    const img = (img) ? <><img src={alertLogo} /><br/></> : null
    const msg = <>{img}<span>You are an unauthorized user or your login time has expired</span></>
    alert = <AlertModal show={showAlert} closeFunct={setShowAlert} message={msg} />
  }

  const titleImg = (titleLogo) ? <img src={titleLogo} alt="Logo" className="sw-header_logo" /> : null
  return (<header>
            <div className="sw-header_div">
              {titleImg}
              <h1 className="sw-header_title">{title}</h1>
              <h2>{userMsg}{modalButton}</h2>
              <h2>{dbType}</h2>
              {logout}
              {login}
              <HeaderModal show={showModal} username={username} setUser={setUsername} closeFunct={setShowModal}/>
            </div>
            {alert}
          </header>);
}

export default Header;
