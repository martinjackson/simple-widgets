import React, { useState, useEffect } from 'react';

import { NavigateBar } from './NavigateBar';
import { deleteCssRule } from './cssRulesFunct';
// import { TS } from './time'

import { hasOwnProperty } from './hasOwnProperty.js'

let setMenuPath = (_newPath) => {}
let setMenuParms = (_newParms) => {}

let menuParms = {}
export const getMenuParms = () => { return menuParms }

// ----------------------------------------------------------------------------------
export const MenuBar = (props) => {
    const [curPath, setCurPath]   = useState(props.path)
    // const [curParms, setCurParms] = useState({})                   // TODO: curParms, it is never used
    const [disableMenu, setDisableMenu] = useState(null)

    setMenuPath = setCurPath
    setMenuParms = (val) => {
        menuParms = {...val}
        // setCurParms(val);                           // TODO: why set curParms, it is never used
    }

    const getPaths = (row) => {
        if (hasOwnProperty(row, 'submenu')) {
            return row.submenu.map(getPaths).flat();
        } else {
            return { path: row.path, component: row.component }
        }
    }


    let subSymbol = 'none';
    if (hasOwnProperty(props, 'subsymbol')) {
        subSymbol = props.subsymbol;
    }

    let symbol = 'none';
    if (hasOwnProperty(props, 'symbol')) {
        symbol = props.symbol;
    }

    let type = 'horizontal';
    if (hasOwnProperty(props, 'type')) {
        type = props.type;
        if (type !== 'horizontal' && type !== 'vertical') {
            type = 'horizontal';
        }
    }

    let open = 'always';
    if (hasOwnProperty(props, 'open')) {
        open = props.open;
        if (open !== 'always' && open !== 'slide' &&
            open !== 'horizontal' && open !== 'vertical' &&
            open !== 'both') {
            open = 'always';
        }
    }

    let noSide = false;
    if (hasOwnProperty(props, 'noSide')) {
        noSide = true;
    } else if (type === 'horizontal') {
        noSide = true;
    }

    let format = 'float';
    if (hasOwnProperty(props, 'format') === true) {
        format = props.format;
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

    if (componentClassName === null) componentClassName = '';
    let typeClass = (type === 'horizontal') ? 'nav-menu_horizontal' : 'nav-menu_vertical';
    if (format === 'float') {
        typeClass = 'nav-menu_float';

        deleteCssRule ('body::-webkit-scrollbar');
    }


    return (
        <div className={classStyle}>
            <NavigateBar
                 menuTree={props.menuTree}
                 symbol={symbol}
                 subsymbol={subSymbol}
                 formatClass='nav-nav-menu'
                 type={type}
                 open={open}
                 page={(hasOwnProperty(props, 'page')) ? true : false}
                 disabled={disableMenu} />
            <div className={`${typeClass} ${componentClassName}`}>
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

