import React from 'react';
import { UserSection } from './index.js'

// ------------------------------------------------------------------------
export function Home(props) {

  let roleMsg, Bottom = <></>;

  switch (props.role) {
    case undefined: roleMsg = "Role is undefined";
      break;

    case null: roleMsg = "Checking Roles..."
      Bottom = props.missingRoleMsg
      break;

    default: roleMsg = ""
      break;
  }

  return <div className="flex flex-col font-bold space-y-8 space-x-8 px-60 py-12 text-center" style={{ margin: 10 }}>
    <div className="m-auto">
      <h2>
        <UserSection
          username={props.username}
          alertLogo={props.alertLogo}
          loginURL={props.loginURL}
        />
        {roleMsg}
      </h2>
      {Bottom}
    </div>
  </div>;

}
