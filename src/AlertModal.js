import React from 'react';

import { Modal, hasOwnProperty } from './index.js';

const defProps = {
    show: true,
    closeFunct: () => {},
    message: 'No Alert message given',
}

export function AlertModal(inProps) {

    const props = {...defProps, ...inProps};

    if (hasOwnProperty(inProps, 'show') === false) {
        console.error ('AlertModal: The show property is not present');
    }

    if (hasOwnProperty(inProps, 'closeFunct') === false) {
        console.error ('AlertModal: The closeFunct property is not present');
    }

    return (
        <div>
            {
                props.show === true ?  (
                    <Modal>
                        <div className="sw-modal_zindex">
                            { (hasOwnProperty(props, 'nodisplayX') === true) ?
                                <span></span> :
                                <XButton closeFunct={props.closeFunct} />
                            }
                            <h1>{(props.message === '') ? defProps.message : props.message}</h1>
                            <button name="ok" onClick={() => props.closeFunct(false)} className="sw-modal_abuttonStyle" >OK</button>
                        </div>
                    </Modal>
                ) : null
            }
        </div>
    );
}

