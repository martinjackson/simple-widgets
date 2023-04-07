import React from "react";

export const pretty = (obj) => JSON.stringify(obj, null, 2)


export const Show = ({data,hide}) => {
  const _data = {...data}

  // dont show the form structure or  any other field listed as hidden
  if (hide)
    hide.map(f => { delete _data[f] })

  return <pre>
          {pretty(_data)}
        </pre>
}


