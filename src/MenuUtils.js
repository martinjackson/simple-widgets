import React, {useEffect} from 'react'

import { genStoreItem } from './generalStore'

export const useMenuParms = genStoreItem('menuParms', {});
export const useMenuState = genStoreItem('menuState', '');

export const Redirect = (props) => {
    const [curMenuPath, setCurMenuPath] = useMenuState()
    const [curMenuParms, setCurMenuParms] = useMenuParms();

    useEffect(() => {
        setCurMenuPath(props.to)
        setCurMenuParms(props.parms)
    }, [])

    return <></>
}

export const Link = (props) => {
    const [curMenuPath, setCurMenuPath] = useMenuState();
    const [curMenuParms, setCurMenuParms] = useMenuParms();

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

