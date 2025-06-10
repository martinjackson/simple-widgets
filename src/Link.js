
// cSpell:ignore Parms Funct

import React from 'react'
import { dTS, setMenuParms, setMenuPath } from './index.js'

// ----------------------------------------------------------------------------------

export const Link = (props) => {

    if (!props.to || props.to.length < 1) // same as || props.to === "")
     return <span className="sw-nav-links">{props.children}</span>

    const click = (e) => {
        e.preventDefault();
        console.log(dTS(), `You clicked '${props.to}'`);
        setMenuParms(props.parms)
        setMenuPath(props.to)
        // window.location.search = `?path=${props.to}`    causes page to rerender
      document.title = `${props.title} - ${props.to}`;
  }

  const cname = props.className || ""

  return <span className={'sw-nav-links ' + cname} href={props.to} onClick={click}>{props.children}</span>
}

