import React from "react";
import classes from './UserItem.module.css';

const UserItem = props => {
  return (
    <li className={classes.user}>{props.children}</li>
  );
};

export default UserItem;