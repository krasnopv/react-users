import React from "react";
import UserItem from "../UserItem/UserItem";
import classes from './UsersList.module.css';
import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map(user => (
          <UserItem
          className={classes.users.li}
            key={user.id}
            onDelete={props.onDeleteItem}
          >
            {user.name} ({user.age} years old)
          </UserItem>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList