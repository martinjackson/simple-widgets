import React, { useEffect, useRef }  from 'react';
import { createPortal } from 'react-dom';
import { hasOwnProperty } from './hasOwnProperty';


export const Modal = ({ children }) => {
    const elRef = useRef(null);

    if (!elRef.current) {
        const div = document.createElement('div');
        elRef.current = div;
    }

    useEffect(() => {
        const modalRoot = document.getElementById('sw-modal');
        if (modalRoot) {
            modalRoot.appendChild(elRef.current);

            return () => modalRoot.removeChild(elRef.current);
        } else {
            console.log('Can not find DOM element ID: sw-modal, Modal widget will not pop up.');
            console.log('Please add the following to your index.html');
            console.log('    <div id="sw-modal"></div>');
        }
    }, [])

    return createPortal(<div>{children}</div>, elRef.current);
};

// maj 2025-06-02 changes <p> to <div>
export const XButton = (props) => {
    return (
        <div className="sw-modal_divButton">
           <button name="close" onClick={() => props.closeFunct(false)}
                   className="sw-modal_xbuttonStyle" >X</button>
           { (hasOwnProperty(props, 'nounder') === true) ? <span></span> : <hr /> }
        </div>
    )
}