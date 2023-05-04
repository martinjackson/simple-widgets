import React from 'react';

import { Modal } from './Modal.js';

import { hasOwnProperty } from './hasOwnProperty.js';

const defProps = {
    show: true,
    closeFunct: () => {},
    message: 'No Error message given',
}

export const ErrorModal = inProps => {
    const props = {...defProps, ...inProps};

    if (hasOwnProperty(inProps, 'show') === false) {
        console.error ('ErrorModal: The show property is not present');
    }

    if (hasOwnProperty(inProps, 'closeFunct') === false) {
        console.error ('ErrorModal: The closeFunct property is not present');
    }

    return (
        <div>
            {
                (props.show === true) ?  (
                    <Modal>
                        <div>
                            <h1 className="modal_marginStyle">Error</h1>
                            <h2>{(props.message === '') ? defProps.message : props.message}</h2>
                            <button name="ok" onClick={() => props.closeFunct(false)} className="sw-modal_ebuttonStyle" >OK</button>
                        </div>
                    </Modal>
                ) : null
            }
        </div>
    );
}

