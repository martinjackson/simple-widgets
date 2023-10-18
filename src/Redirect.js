import React, { useEffect } from 'react';
import { setMenuParms, setMenuPath } from './MenuBar';

// ----------------------------------------------------------------------------------

export const Redirect = (props) => {

    useEffect(() => {
        setMenuParms(props.parms);
        setMenuPath(props.to);
    }, [props.to, props.parms]);

    return <></>;
};
