import React, { useState } from 'react';

import { Modal }  from './index.js';


export const HeaderModal = (props) => {

    const [user, setUser] = useState(props.username)

    const closeButton = () => {
        props.setUser(user)
        props.closeFunct(false);
    }

    return (
        <div>
            {(props.show === true) ?
                <Modal>
                    <div>
                        <div>
                           <input type="text" name="user" value={user}
                                  onChange={(event) => setUser(event.target.value)} />
                        </div>
                        <button name="close" onClick={closeButton} >Close</button>
                    </div>
                </Modal> : null
            }
        </div>
    )
}

