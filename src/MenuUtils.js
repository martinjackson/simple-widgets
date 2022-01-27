import React, {useEffect} from 'react'

import { openGeneralStore } from './generalStore'


export const Redirect = (props) => {    
    const gs = openGeneralStore()
     
    const [curMenuPath, setCurMenuPath] = gs.useMenuState()
    const [curMenuParms, setCurMenuParms] = gs.useMenuParms();

    useEffect(() => {
        setCurMenuPath(props.to)
        setCurMenuParms(props.parms)
    }, [])

    return <></>
}

export const Link = (props) => {
    const gs = openGeneralStore()

    const [curMenuPath, setCurMenuPath] = gs.useMenuState();
    const [curMenuParms, setCurMenuParms] = gs.useMenuParms();

    if (!props.to || props.to === "")
       return <span className="nav-links">{props.children}</span>

    const click = (e) => {
        e.preventDefault();
        console.log(`You clicked ${props.to}`);
        setCurMenuPath(props.to)
        setCurMenuParms(props.parms)
    }

    const cname = props.className || ""

    return <span className={'nav-links '+cname} href={props.to} onClick={click}>{props.children}</span>
}

