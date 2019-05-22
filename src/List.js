import React, { Fragment } from 'react';

const Choice = (props) => {

    var props = {...this.props};
    const list = (props.list) ? props.list: props.choices;
    delete props.list;
    delete props.choices;   // legacy support
    const siz = (props.size) ? props.size : 10;
    delete props.size;

    if (props.multiple) {
      return <Fragment>
                <select multiple {...props} size={siz} >
                  {list.map( el => <option key={el} value={el}>{el}</option>)}
                </select>
            </Fragment>;
    }
    else {
      return <Fragment>
                <select {...props} size={siz} >
                  {list.map( el => <option key={el} value={el}>{el}</option>)}
                </select>
            </Fragment>;
    }


}

const List = <Choice multiple={true} {...props} />

export {List, Choice}