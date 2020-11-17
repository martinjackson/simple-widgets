import React from 'react';
import Modal from './Modal';
import { buttonStyle } from './Theme';
import './modal.css';

const ErrorModal = props => {
    if (props.hasOwnProperty('show') === false) {
        console.error ('The show property is not present');
        return;
    }

    if (props.hasOwnProperty('closeFunct') === false) {
        console.error ('The closeFunct property is not present');
        return;
    }

    if (props.hasOwnProperty('message') === false) {
        console.error ('The message property is not present');
        return;
    }

    if (props.hasOwnProperty('buttonStyle') === true) {
        buttonStyle = props.buttonStyle;
    }

    const marginStyle = {
        marginBottom: "10px",
    };

    return (
        <div>
            {
                props.show === true ?  (
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