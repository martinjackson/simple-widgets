import React from 'react';

import Modal from './Modal.js';
import { buttonStyle } from './Theme.js';
import './modal.css';

const ConfirmModal = props => {
    return (
        <div>
            {
                props.show === true ?  (
                    <Modal>
                        <div>
                            <h1>{props.message}</h1>
                            <button name="yes" onClick={(async) => processYesFunct()} style={buttonStyle} >Yes</button>
                            <button name="no" onClick={() => props.noFunct(false)} style={buttonStyle} >No</button>
                        </div>
                    </Modal>
                ) : null
            }
        </div>
    );

    function processYesFunct() {
        props.noFunct(false);
        props.yesFunct();
    }
}

export default ConfirmModal;