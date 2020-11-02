import React from 'react';
import Modal from './Modal';
import Theme from './Theme';
import './modal.css';

const ConfirmModal = props => {
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
        console.error('The show property is not present');
        return;
    }

    if (props.hasOwnProperty('yesFunct') === false) {
        console.error('The yesFunct property is not present');
        return;
    }

    if (props.hasOwnProperty('noFunct') === false) {
        console.error('The noFunct property is not present');
        return;
    }

    if (props.hasOwnProperty('message') === false) {
        console.error('The message property is not present');
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