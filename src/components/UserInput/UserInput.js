import React, { useState } from "react";
import styles from './UserInput.module.css';

const UserInput = (props) => {
  <div className={`${styles['form-control']}`}>
    <label>{props.label}</label>
    <input type={props.type}></input>
  </div>

};

export default UserInput;