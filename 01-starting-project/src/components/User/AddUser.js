import React from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
 function AddUser (props){

     const addUserHandeler = (event) => {
         event.preventDefault();
     }


    return (
        <div>
      <Card className ={classes.input}>  
        <form onSubmit = {addUserHandeler}>
          <label htmlFor="username">Username</label>
          <input id = "username" type="text"></input>
          <label htmlFor="age">Number</label>
          <input id = "age" type="number"></input>
          <Button type="submit">Add Contact</Button>

        </form>
       </Card>
       </div>)
    
}

export default AddUser;