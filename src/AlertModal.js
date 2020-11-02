import React from 'react';
import Modal from './Modal';
import Theme from './Theme';
import './modal.css';

const AlertModal = props => {
    let buttonStyle = {
        margin: "10px",
        borderRadius: "10px",
        color: Theme.getButtonFGColor(),
        backgroundColor: Theme.getButtonBGColor(),
        width: "100px",
        height: "30px",
        font: Theme.getButtonFont(),
        fontWeight: "bold",
    };

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

    return (
        <div>
            {
                props.show === true ?  (
                    <Modal>
                        <div>
                            <h1>{props.message}</h1>
                            <button name="ok" onClick={alertDone} style={buttonStyle} >OK</button>
                        </div>
                    </Modal>
                ) : null
            }
        </div>
    );

    function alertDone() {
        if (props.hasOwnProperty('extra') === true) {
            props.extra();
        }

        props.closeFunct(false);
    }
}

export default AlertModal;