import React, { useEffect, useRef }  from 'react';
import { createPortal } from 'react-dom';


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

