import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
 function AddUser (props){
  const [enteredUsername,setEnteredUsername]=useState('');
  const [enteredAge,setEnteredAge]=useState('');
  const [error,setError]=useState();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  }
  const ageChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  }


  const addUserHandler = (event) => {
      event.preventDefault();
      if (enteredUsername.trim.length===0 || enteredAge.trim.length===0){
        setError({
          title:"Invalid input",
          message: "Please enter a valid name and number (non-empty values)."
        })
        return;
      }
      if(+enteredAge<1){
        setError({
          title:"Invalid number!!",
          message: "Please enter a valid number!"
        })
        return; 
      }
      props.onAddUser(enteredUsername,enteredAge);
      setEnteredUsername('');
      setEnteredAge('');
    }

    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message}/>}
      <Card className ={classes.input}>  
        <form onSubmit = {addUserHandler}>
          <label htmlFor="username">Contactname</label>
          <input id = "username" value ={enteredUsername} type="text" onChange={usernameChangeHandler}></input>
          <label htmlFor="age">Number</label>
          <input id = "age" value={enteredAge} type="number" onChange={ageChangeHandler}></input>
          <Button type="submit">Add Contact</Button>
        </form>
       </Card>
       </div>)
    
}

export default AddUser;