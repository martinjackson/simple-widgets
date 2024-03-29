import React from 'react';

export const ContextMenu = (propsIn) => {
    const { positionX, positionY, noLeave, noCancel, menu, ...props } = propsIn;

    const propsPositionX = positionX || 10;
    const propsPositionY = positionY || 10;
    const propsNoLeave = noLeave || false;
    const propsNoCancel = noCancel || false;
    const propsMenu = menu || [];

    const menuPositionStyle = {
        left: propsPositionX,
        right: propsPositionY,
    }

    function cancelButton() {
        props.closeFunct (false);
    }

    function execute (funct) {
        funct();
        props.closeFunct(false);
    }

    function mouseLeave() {
        if (propsNoLeave === false) {
            props.closeFunct(false);
        }
    }

    function buildMenuItem(row, i) {
        let key = 'row_' + props.name + i;
        let dkey = 'div_' + key

        return (
            <div key={dkey}>
                <span className="sw-cm_contextMenuHov" key={key} onClick={() => execute(row.funct)}>{row.name}</span><br /><br />
            </div>
        )
    }

    if (props.show === true) {
        return (
            <div className="sw-cm_contextMenuHov sw-cm_menuStyle" onMouseLeave={mouseLeave} style={menuPositionStyle}>
                {propsMenu.map(buildMenuItem)}
                { (propsNoCancel) ? <br /> : <span><span className="sw-cm_contextMenuHov" key="cancelKey" onClick={cancelButton}>Cancel</span><br /><br /></span> }
            </div>
        )
    } else {
        return null;
    }
}

