
import React, {useState, useEffect } from 'react'

import { MenuBar, dTS, Header, getUrlPath }   from './index.js'

// ----------------------------------------------------------------------------------------------
const extractSessionParts = (sessionInfo) => {

    const username    = sessionInfo.user?.name       // Network ID
    const dbDisplay   = sessionInfo.dbInfo?.dbDisplay
    const dbReadOnly  = sessionInfo.dbInfo?.dbReadOnly
    const role        = sessionInfo.user?.role
    const roleNum     = sessionInfo.user?.roleNum
    const userId      = sessionInfo.user?.userId

    return {username, dbDisplay, dbReadOnly, role, roleNum, userId}
}

// ----------------------------------------------------------------------------------------------
export function AppCore(props) {

  const getMenu = props.getMenu

  const [username, setUsername] = useState(null);
  const [userId, setUserId] = useState(-1);
  const [dbDisplay, setDbDisplay] = useState('');
  const [dbReadOnly, setDbReadOnly] = useState(false);
  const [role, setRole] = useState(null);        // value for unassigned, checking roles
  const [roleNum, setRoleNum] = useState(-1);    // value for unassigned, checking roles
  const [menu, setMenu] = useState(getMenu('', ''))
  const [errMsg, setErrMsg] = useState(null)

  const signalDone = () => {
    // there was more here earlier, be was refactor out. The debug was still useful
    if (props.debug) {
      // console.log(dTS(), 'signalDone() in AppCore.js')
    }
  }

  const AppStartup = props.AppStartup
  const appStartup = (props.AppStartup) ? <AppStartup username={username} signalDone={signalDone} debug={props.debug} /> : null

  const displayErrors = response => {
    if (!response.ok) {
      setErrMsg(response.statusText)
    }
    return response
  }

  const checkOut = () => {
    fetch('./api/checkOut')
    .then(status => {
      console.log('checkOut status:', status)

      // redirect browser to
      window.location.href = props.logoutURL       // click on <a href={logoutURL} className="sw-header_link">Logout</a>
      // no need to clear state, the SPA will be no more...
    })
  }

  const checkIn = () => {
    fetch('./api/checkIn')
    .then(displayErrors)
    .then(response => response.json())
    .then(data => {
      if (props.debug) {
        console.log(dTS(), './api/checkIn session info:', data)
      }

      const session = extractSessionParts(data)
      if (props.debug) {
         console.log('session:', session)
      }
      const {username, dbDisplay, dbReadOnly, role, roleNum, userId} = session
      setUsername(username)
      setUserId(userId)
      setDbDisplay(dbDisplay)
      setDbReadOnly(dbReadOnly)
      setRole(role)
      setRoleNum(roleNum)
      setMenu(getMenu(role, dbDisplay))
      console.log(dTS(), 'setting menu', {username, role, dbDisplay: dbDisplay})
    })
  }

  useEffect(() => {
    checkIn()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // <Header ...  noModalOnError />    aka. hide the "not authorized" pop up

  const path = getUrlPath()

  const sessionOnlyRO = dbReadOnly && !dbDisplay.endsWith('-RO')   // TODO: This is such a hack (no time to do better)
  const dbMsg = dbDisplay + ((sessionOnlyRO) ? ' R/O' : '')
  return (
        <div>
            <Header username={username}  dbDisplay={dbMsg}
                title={props.title}
                alertLogo={props.alertLogo}
                titleLogo={props.titleLogo}
                logoutFn={checkOut}
                loginURL={props.loginURL}
                hideUserSection={true}
                debug={props.debug}
             />
             {errMsg}
             {appStartup}
            <MenuBar
                menuTree={menu}
                path={path}

                  role={role}
                  roleNum={roleNum}
                  username={username}
                  userId={userId}
                  checkIn={checkIn}
                  checkOut={checkOut}
                  {...props}
            />
        </div>
    )
  }

  // checkIn={checkIn}   call back to functionality in AppCore that tickles the backend ./api/checkIn to reload mew user session info
  // checkOut={checkOut} call back to functionality in AppCore that tickles the backend ./api/checkOut to wipe out user session info
  //
  // role={role}         current role     retrieved from the backend ./api/checkIn API
  // roleNum={roleNum}   current roleNum  retrieved from the backend ./api/checkIn API
  // username={username} current username retrieved from the backend ./api/checkIn API
  // userId={userId}     current userId   retrieved from the backend ./api/checkIn API

  // {...props} all of the following

    // title       -- a several word title used in the header above the menu, but passed everywhere is case needed elsewhere
    // alertLogo   -- icon to be used in alert modal dialog boxes to get attention
    // titleLogo   -- application or Agency Logo
    // loginURL    -- place to login via password, pin, hardware token, biometrics, 2FA, etc.
    // logoutURL   -- place to logout clearing out agency mechanisms
    // missingRoleMessage -- a link to get the proper User Request form to have a Role granted (agency specific)
    // debug       -- used to toggle console.log and other debug mechanisms

    // origTabTitle -- The original application title in the browser tab, this is used along with the clicked path to change the browser title when a menu item is selected. example: you clicked About and the browser title becomes "{application title} - /About"
    //                 because this was passed as origTabTitle="{application title}" to MenuBar


  // MenuBar is passed checkIn={checkIn} because other screens like About might needs props.checkIn() to refresh Header when displayed info has changed



