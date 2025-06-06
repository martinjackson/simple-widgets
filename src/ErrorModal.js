import React from 'react'

import { Modal, XButton, hasOwnProperty } from './index.js'

const defProps = {
    show: true,
    closeFunct: () => {},
    message: 'No Error message given',
}

export const ErrorModal = inProps => {
    const props = {...defProps, ...inProps};

    if (hasOwnProperty(inProps, 'show') === false) {
        console.error ('ErrorModal: The show property is not present');
    }

    if (hasOwnProperty(inProps, 'closeFunct') === false) {
        console.error ('ErrorModal: The closeFunct property is not present');
    }

    return (
        <div>
            {
                (props.show === true) ?  (
                    <Modal>
                        <div className="sw-modal_flex sw-modal_zindex">
                            <p className="sw-modal_header">Error</p>
                            { (hasOwnProperty(props, 'nodisplayX') === true) ?
                                <span></span> :
                                <XButton closeFunct={props.closeFunct} nounder />
                            }
                        </div>
                        <hr />
                        <h2>{(props.message === '') ? defProps.message : props.message}</h2>
                        <button name="ok" onClick={() => props.closeFunct(false)} className="sw-modal_ebuttonStyle" >OK</button>                        
                    </Modal>
                ) : null
            }
        </div>
    );
}

