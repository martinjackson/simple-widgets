import React, { useState, useEffect } from 'react';

import { defaultThemeSettings } from './Theme';
import './contextMenuHover.css';

const ContextMenu = (propsIn) => {
    console.log ('props', propsIn);
    const { positionX, positionY, noLeave, noCancel, menu, 
            backColor, border, radius, ...props } = propsIn;

    const propsPositionX = positionX || 10;
    const propsPositionY = positionY || 10;
    const propsNoLeave = noLeave || false;
    const propsNoCancel = noCancel || false;
    const propsMenu = menu || [];
    const backgroundColor = backColor || defaultThemeSettings.backgroundColor;
    const propsBorder =  border || "2px solid black";
    const propsRadius = radius || "10px"

    function cancelButton() {
        props.closeFunct (false);
    }

    const menuStyle = {
        left: propsPositionX,
        top: propsPositionY,
        border: propsBorder,
        borderRadius: propsRadius,
        backgroundColor: backgroundColor,  // "#CCCC66",
    }

    function execute (funct) {
        funct();
        props.closeFunct(false);
    }

    function mouseLeave() {
        console.log ('mouseLeave');
        if (propsNoLeave === false) { 
            props.closeFunct(false);
        }
    }

    function buildMenuItem(row, i) {
        let key = 'row_' + i;

        console.log ('row', row);

        return (
            <div>
                <span key={key} onClick={() => execute(row.funct)}>{row.name}</span><br /><br />
            </div>
        )
    }

    if (props.show === true) { 
        return (
            <div className="contextMenuHov" style={menuStyle} onMouseLeave={mouseLeave}>
                {propsMenu.map(buildMenuItem)}
                { (propsNoCancel) ? <br /> : <span><span key="cancelKey" onClick={cancelButton}>Cancel</span><br /><br /></span> }
            </div>
        )
    } else {
        return null;
    }
}

export default ContextMenu;