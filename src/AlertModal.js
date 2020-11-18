import React from 'react';
import Modal from './Modal';
import { buttonStyle } from './Theme';
import './modal.css';

const AlertModal = props => {
    return (
        <div>
            {
                props.show === true ?  (
                    <Modal>
                        <div>
                            <h1>{props.message}</h1>
                            <button name="ok" onClick={() => props.showFunct(false)} style={buttonStyle} >OK</button>
                        </div>
                    </Modal>
                ) : null
            }
        </div>
    );
}

export default AlertModal;