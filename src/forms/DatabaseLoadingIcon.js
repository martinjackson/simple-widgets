import React from 'react';

// <a target="_blank" href="https://icons8.com/icon/gxuEDgFteZdP/database">Database</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

// --------------------------------------------------------------------------
export const DatabaseLoadingIcon = (props) => {

  const cn = (props.className) ? props.className + ' ' : '';
  const databaseLoading = './icons8-database.gif'     // dont import complicates bundler rules

  return (<img style={props.style} className={cn + 'sw-DatabaseLoadingIcon'} src={databaseLoading}></img>);
};
