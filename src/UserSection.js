import React from 'react';

// ----------------------------------------------------------------------------
export const UserSection = (props) => {

  if (!props) {
     console.log('<UserSection> w/o props');
     return null
  }

const notLoggedIn = <>
        <span>You are not logged in.</span>
  </>

let userMsg  = (!props['username']) ? notLoggedIn : 'Welcome ' + props.username


  return (<>
            <div>
              <span>{userMsg}</span>
            </div>
          </>);
}

