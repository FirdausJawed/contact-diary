import React from 'react';

function AddUser (props){

     const addUserHandeler = (event) => {
         event.preventDefault();
     }


    return (
    <form onSubmit = {addUserHandeler}>
          <label htmlFor="username">Username</label>
          <input id = "username" type="text"></input>
          <label htmlFor="age">Number</label>
          <input id = "age" type="number"></input>
          <button type="submit">Add Contact</button>

         </form>)

    
}

export default AddUser;