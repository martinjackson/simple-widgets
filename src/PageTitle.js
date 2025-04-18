import React from 'react';

// import { hasOwnProperty } from './hasOwnProperty';

export const PageTitle = props => {
    // let smallTitle = <span></span>;
    // if (hasOwnProperty(props, 'smallTitle') === true) {
    //     smallTitle = <small className="sw-pt_bannerSmallFont">{props.smallTitle}</small>
    // }
    return (
        <div className="sw-pt_banner">
            <div>
                <h1 className="sw-pt_bannerFont">{props.title}</h1>
           </div>
        </div>
    )
}
