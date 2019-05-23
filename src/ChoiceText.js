import React from 'react';



// currently only accepts property choices as ['one','two']



class ChoiceText extends React.Component {



  render() {

    const {choices, ...props} = this.props;

    return <span>

               <input type="text" {...props} />

               <datalist id={props.list} >

                 {choices.map( el => <option key={el} value={el}>{el}</option>)}

               </datalist>

          </span>;

  }



}



export default ChoiceText;


