import React from 'react';

export const StatusBox = ({ status }) => {
  if (!status)
    return null;

  let errSection = null;
  if (status.err) {
    const errMsg = JSON.stringify(status.err, null, 2);
    console.log('status.err:', status.err);
    errSection = (<><br />{errMsg}</>);
  }

  return (
    <>
      {status.msg}
      {errSection}
    </>
  );

};
