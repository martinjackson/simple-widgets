import React from 'react';

// ---------------------------------------------------------------------------------------------------------------------------------
export const ErrorList = (props) => {

  return <div className='ErrorList text-center text-red-600'>
    <ul>
      {props.list.map((e, i) => <li key={i}>{e}</li>)}
    </ul>
  </div>;
};
