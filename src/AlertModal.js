import React, { useState, useEffect } from 'react';

import Modal from './Modal.js';
import { buttonStyle as defButtonStyle} from './Theme.js';
import './modal.css';

const defProps = {
    show: true,
    closeFunct: () => {},
    message: 'No Alert message given',
    buttonStyle: {...defButtonStyle},
}

const AlertModal = inProps => {

    const props = {...defProps, ...inProps};

    if (('show' in inProps) === false) {
        console.error ('AlertModal: The show property is not present');
    }

    if (('closeFunct' in inProps) === false) {
        console.error ('AlertModal: The closeFunct property is not present');
    }

    return (
        <div>
            {
                props.show === true ?  (
                    <Modal>
                        <div>
                            <h1>{(props.message === '') ? defProps.message : props.message}</h1>
                            <button name="ok" onClick={() => props.closeFunct(false)} style={props.buttonStyle} >OK</button>
                        </div>
                    </Modal>
                ) : null
            }
        </div>
    );
}

export default AlertModal;
