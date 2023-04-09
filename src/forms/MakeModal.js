import React from 'react';

import { Modal }  from '../Modal.js';

// import '../node_modules/simple-widgets/lib/sw-modal.css';
// see ./simple-widgets.js

import "./MakeModal.css"

export const MakeModal = props => {

    function close() {
      if (props.closeFunct) {
        props.closeFunct(false)
      }
    }

    const defClickable = <button name="ok" onClick={close} className="modal_buttonStyle">OK</button>
    const kids = (props.children) ? props.children : defClickable
    const CancelButton = (props.closeFunct) ? <button name="Cancel" onClick={close} className="modal_buttonStyle">Cancel</button> : null

    return (
        <div>
            {
                props.show === true ?  (
                    <Modal>
                        <div>
                            <h1>{props.message}</h1>
                            {kids}
                            {CancelButton}
                        </div>
                    </Modal>
                ) : null
            }
        </div>
    );
}

