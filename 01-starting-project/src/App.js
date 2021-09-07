import React,{useState} from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';
function App() {
  const [usersList,setUserList]= useState([]);

  const addUserHandler = (uName,uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList,{name:uName, age:uAge}]
    })
  }
  return (
    <div>
      <AddUser onAddUser ={addUserHandler} />
      <UsersList users = {usersList} />
    </div>
  );
}

export default App;
