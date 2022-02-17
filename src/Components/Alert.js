import React from 'react';

function Alert(props) {

    // creating function for capitalized the first letter 
const capitalize =(word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}
  return (
    props.AlertMessage &&<div className={`alert alert-${props.AlertMessage.Type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.AlertMessage.Type)}</strong> : {props.AlertMessage.msg}
  </div>
  )

}

export default Alert;
