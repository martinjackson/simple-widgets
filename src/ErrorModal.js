import React from 'react';

import Modal from './Modal.js';
import { buttonStyle as defButtonStyle} from './Theme.js';
import './modal.css';

const hasProperty = (obj, propName) => { return !!Object.getOwnPropertyDescriptor(obj, propName);}

const ErrorModal = props => {
    if (hasProperty(props,'show') === false) {
        console.error ('The show property is not present');
        return;
    }

    if (hasProperty(props,'closeFunct') === false) {
        console.error ('The closeFunct property is not present');
        return;
    }

    if (hasProperty(props,'message') === false) {
        console.error ('The message property is not present');
        return;
    }

    let buttonStyle = {...defButtonStyle}
    if (hasProperty(props,'buttonStyle') === true) {
        buttonStyle = props.buttonStyle;
    }

    const marginStyle = {
        marginBottom: "10px",
    };

    return (
        <div>
            {
                (props.show === true) ?  (
                    <Modal>
                        <div>
                            <h1 style={marginStyle}>Error</h1>
                            <h2>{props.message}</h2>
                            <button name="ok" onClick={() => props.closeFunct(false)} style={buttonStyle} >OK</button>
                        </div>
                    </Modal>
                ) : null
            }
        </div>
    );
}

export default ErrorModal;