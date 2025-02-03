
// cSpell:ignore Parms

import React, { useEffect } from 'react'
import { setMenuParms, setMenuPath } from './index.js'

// ----------------------------------------------------------------------------------

export const Redirect = (props) => {

    useEffect(() => {
        setMenuParms(props.parms);
        setMenuPath(props.to);
    }, [props.to, props.parms]);

    return <></>;
};
