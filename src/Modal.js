import React, { useEffect, useRef }  from 'react';
import { createPortal } from 'react-dom';

export const Modal = ({ children }) => {
    const elRef = useRef(null);

    if (!elRef.current) {
        console.log('Modal.js: no elRef     creating one...);
        const div = document.createElement('div');
        elRef.current = div;
    }

    useEffect(() => {
        let modalRoot = document.getElementById('sw-modal');
        if (!modalRoot) {
            console.log('Modal.js: div id=sw-modal not found. creating one...');

            modalRoot = document.createElement('div');
            modalRoot.setAttribute('id', 'sw-modal'); // Set the ID here
        }
        modalRoot.appendChild(elRef.current);

        return () => modalRoot.removeChild(elRef.current);
        }, [])

    return createPortal(<div>{children}</div>, elRef.current);
};

