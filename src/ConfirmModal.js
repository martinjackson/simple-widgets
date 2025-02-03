import React from 'react';

import { Modal, hasOwnProperty } from './index.js'

const defProps = {
    show: true,
    yesFunct: () => {},
    noFunct: () => {},
    closeFunct: () => {},
    message: 'No Confirm message given',
}

export const ConfirmModal = inProps => {
    const props = {...defProps, ...inProps};

    if (hasOwnProperty(inProps, 'show') === false) {
        console.error ('ConfirmModal: The show property is not present');
    }

    if (hasOwnProperty(inProps, 'yesFunct') === false) {
        console.error ('ConfirmModal: The yesFunct property is not present');
    }

    if (hasOwnProperty(inProps, 'noFunct') === false && hasOwnProperty(inProps, 'closeFunct') === false) {
        console.error ('ConfirmModal: The closeFunct property is not present');
    }

    return (
        <div>
            {
                props.show === true ?  (
                    <Modal>
                        <div>
                            <h1>{(props.message === '') ? defProps.message : props.message}</h1>
                            <button name="yes" onClick={async () => processYesFunct()} className="sw-modal_cbuttonStyle" >Yes</button>
                            <button name="no" onClick={async () => processNoFunct()} className="sw-modal_cbuttonStyle" >No</button>
                        </div>
                    </Modal>
                ) : null
            }
        </div>
    );

    function processYesFunct() {
        if (hasOwnProperty(inProps, 'noFunct') === true && hasOwnProperty(inProps, 'closeFunct') === false) {
            props.noFunct(false);
        } else {
            props.closeFunct(false);
        }

        if (props.yesFunct !== null) {
            props.yesFunct();
        }
    }

    function processNoFunct() {
        if (hasOwnProperty(inProps, 'noFunct') === true && hasOwnProperty(inProps, 'closeFunct') === false) {
            props.noFunct(false);
        } else {
            props.closeFunct(false);
        }

        if (props.noFunct !== null) {
            props.noFunct();
        }

    }
}

