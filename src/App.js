import React, { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/UsersList/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList(prevUsersList => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };

  const deleteItemHandler = userId => {
    setUsersList(prevUsers => {
      const updatedUsers = prevUsers.filter(user => user.id !== userId);
      return updatedUsers;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No users found. Maybe add one?</p>
  );

  if (usersList.length > 0) {
    content = (
      <UsersList users={usersList} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler}/>
      {content}
    </>
  );
}

export default App;
