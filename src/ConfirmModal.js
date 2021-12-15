import React from 'react';

import Modal from './Modal.js';

const defProps = {
    show: true,
    yesFunct: () => {},
    noFunct: () => {},
    closeFunct: () => {},
    message: 'No Confirm message given',
}

const ConfirmModal = inProps => {
    const props = {...defProps, ...inProps};

    if (('show' in inProps) === false) {
        console.error ('ConfirmModal: The show property is not present');
    }

    if (('yesFunct' in inProps) === false) {
        console.error ('ConfirmModal: The yesFunct property is not present');
    }

    if (('noFunct' in inProps) === false && ('closeFunct' in inProps) === false) {
        console.error ('ConfirmModal: The closeFunct property is not present');
    }

    return (
        <div>
            {
                props.show === true ?  (
                    <Modal>
                        <div>
                            <h1>{(props.message === '') ? defProps.message : props.message}</h1>
                            <button name="yes" onClick={(async) => processYesFunct()} className="modal_cbuttonStyle" >Yes</button>
                            <button name="no" onClick={(async) => processNoFunct()} className="modal_cbuttonStyle" >No</button>
                        </div>
                    </Modal>
                ) : null
            }
        </div>
    );

    function processYesFunct() {
        if (('noFunct' in inProps) === true && ('closeFunct' in inProps) === false) {
            props.noFunct(false);
        } else {
            props.closeFunct(false);
        }

        if (props.yesFunct !== null) {
            props.yesFunct();
        }
    }

    function processNoFunct() {
        if (('noFunct' in inProps) === true && ('closeFunct' in inProps) === false) {
            props.noFunct(false);
        } else {
            props.closeFunct(false);
        }

        if (props.noFunct !== null) {
            props.noFunct();
        }

    }
}

export default ConfirmModal;