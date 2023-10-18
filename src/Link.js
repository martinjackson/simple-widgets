import React from 'react';
import { dTS } from './time.js';
import { setMenuParms, setMenuPath } from './MenuBar';

// ----------------------------------------------------------------------------------

export const Link = (props) => {

    if (!props.to || props.to.length < 1) // same as || props.to === "")
        return <span className="nav-links">{props.children}</span>;

    const title = (props.title) ? props.title : '';

    const click = (e) => {
        e.preventDefault();
        console.log(dTS(), `You clicked '${props.to}'`);
        setMenuParms(props.parms);
        setMenuPath(props.to);
        // window.location.search = `?path=${props.to}`    causes page to rerender
        document.title = `${title} - ${props.to}`;
    };

    const cname = props.className || "";

    return <span className={'nav-links ' + cname} href={props.to} onClick={click}>{props.children}</span>;
};
