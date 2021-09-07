import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
 function AddUser (props){
  const [enteredUsername,setEnteredUsername]=useState('')

  const [enteredAge,setEnteredAge]=useState('')
     const addUserHandler = (event) => {
         event.preventDefault();
     }
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }
  const ageChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }

    return (
        <div>
      <Card className ={classes.input}>  
        <form onSubmit = {addUserHandler}>
          <label htmlFor="username">Contactname</label>
          <input id = "username" type="text" onChange={usernameChangeHandler}></input>
          <label htmlFor="age">Number</label>
          <input id = "age" type="number" onChange={ageChangeHandler}></input>
          <Button type="submit">Add Contact</Button>

        </form>
       </Card>
       </div>)
    
}

export default AddUser;