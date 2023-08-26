import React,{useState} from "react";
import Card from "../UI/Card";
import classes from "../user/AddUser.module.css"
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
const AddUser=(props)=>{
    const [enteredUsername,setEnterdUsername]=useState('')
    const [enterdAge,setEnterdAge]=useState('')
    const [error,setError]=useState()
    const addUserHandler=(event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length===0 || enterdAge.trim().length===0){
            setError({
                title:"invalid Input",
                message:"Please enter a valid Age and Name(non empty values)"
            })
            return
        }
        if(+enterdAge<1){
            setError({
                title:"invalid Age",
                message:"Please enter a valid Age (>0)"
            })
            return;
        }
        props.onAddUser(enteredUsername,enterdAge)
        setEnterdUsername('')
        setEnterdAge('')
    }
    const usernameChangeHandler=(event)=>{
        setEnterdUsername(event.target.value)
    }
    const ageChangeHandler=(event)=>{
        setEnterdAge(event.target.value)
    }
    const errorHandler=()=>{
        setError(null)
    }
    return(
    <div> {error && <ErrorModel title={error.title} massage={error.message} onConfirm={errorHandler}/> }
         <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
   <label htmlFor="username">UserName</label>
   <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
   <label htmlFor="age">Age</label>
   <input type="number" id="age" value={enterdAge}onChange={ageChangeHandler} />
   <Button type="submit">Add User</Button>
</form>
</Card></div>
      
       
    )
}
export default AddUser