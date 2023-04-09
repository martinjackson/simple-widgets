import React, { useState, useEffect } from 'react';

import { NavigateBar } from './NavigateBar';
// import { TS } from './time'

let setMenuPath = (newPath) => {}
let setMenuParms = (newParms) => {}

let menuParms = {}
export const getMenuParms = () => { return menuParms }

// ----------------------------------------------------------------------------------
export const MenuBar = (props) => {

    const [curPath, setCurPath]   = useState(props.path)
    const [curParms, setCurParms] = useState({})
    const [disableMenu, setDisableMenu] = useState(null)

    setMenuPath = setCurPath
    setMenuParms = (val) => {
        menuParms = {...val}
        setCurParms(val);
    }

    const getPaths = (row) => {
        if (row.hasOwnProperty('submenu')) {
            return row.submenu.map(getPaths).flat();
        } else {
            return { path: row.path, component: row.component }
        }
    }

    let subSymbol = 'none';
    if (props.hasOwnProperty('subsymbol')) {
        subSymbol = props.subsymbol;
    }

    let symbol = 'none';
    if (props.hasOwnProperty('symbol')) {
        symbol = props.symbol;
    }

    let type = 'horizontal';
    if (props.hasOwnProperty('type')) {
        type = props.type;
        if (type !== 'horizontal' && type !== 'vertical') {
            type = 'horizontal';
        }
    }

    let open = 'always';
    if (props.hasOwnProperty('open')) {
        open = props.open;
        if (open !== 'always' && open !== 'slide' &&
            open !== 'horizontal' && open !== 'vertical' &&
            open !== 'both') {
            open = 'always';
        }
    }

    let noSide = false;
    if (props.hasOwnProperty('noSide')) {
        noSide = true;
    } else if (type === 'horizontal') {
        noSide = true;
    }

    const searchPath = curPath || props.path
    const items = props.menuTree.map(mi => getPaths(mi)).flat()
    const active = items.find(item => item.path === searchPath) || items[0]

    const classStyle = (noSide === true) ? "" : " menubar";

    const ActComp = active.component;

    let componentClassName = (type === 'horizontal' || open === 'always') ? null : "nav_menu_component"

    const signalUnsaved = (flag) => {     // null or true,   if true they have unsaved data
      if (flag) {
        // console.log('Active Menu Component signals they have unsaved data. ');
        setDisableMenu(true)
      } else {
        // console.log('Active Menu Component clears signal. ');
        setDisableMenu(null)
      }
    }

    return (
        <div className={"sw-menu " + classStyle}>
            <NavigateBar
                 menuTree={props.menuTree}
                 symbol={symbol}
                 subsymbol={subSymbol}
                 type={type}
                 open={open}
                 page={(props.hasOwnProperty('page')) ? true : false}
                 disabled={disableMenu} />
            <div className={componentClassName}>
                 <ActComp signalUnsaved={signalUnsaved} />
            </div>
        </div>
    )
}

// ----------------------------------------------------------------------------------
export const Redirect = (props) => {

  useEffect(() => {
    setMenuParms(props.parms)
    setMenuPath(props.to)
  }, [props.to, props.parms])

  return <></>
}

// ----------------------------------------------------------------------------------
export const Link = (props) => {

  if (!props.to || props.to.length < 1)    // same as || props.to === "")
     return <span className="nav-links">{props.children}</span>

  const click = (e) => {
      e.preventDefault();
      console.log(`You clicked ${props.to}`);
      setMenuParms(props.parms)
      setMenuPath(props.to)
  }

  const cname = props.className || ""

  return <span className={'nav-links ' + cname} href={props.to} onClick={click}>{props.children}</span>
}

