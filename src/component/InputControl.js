import React from 'react';
import classes from "./InputControl.module.css";

function InputControl(props) {
  return (
    <div className={classes.container}>
        {props.label && <label htmlFor={props.label}>{props.label}</label>}
        <input type={props.type} {...props} />
    </div>
  )
}

export default InputControl