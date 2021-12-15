import React from 'react';

import Modal from './Modal.js';

const defProps = {
    show: true,
    closeFunct: () => {},
    message: 'No Error message given',
}

const ErrorModal = inProps => {
    const props = {...defProps, ...inProps};

    if (('show' in inProps) === false) {
        console.error ('ErrorModal: The show property is not present');
    }

    if (('closeFunct' in inProps) === false) {
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
                            <button name="ok" onClick={() => props.closeFunct(false)} className="modal_ebuttonStyle" >OK</button>
                        </div>
                    </Modal>
                ) : null
            }
        </div>
    );
}

export default ErrorModal;