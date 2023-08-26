import React from "react";
import Card from "../UI/Card";
import classes from './Userlist.module.css'
const UserList=(props)=>{
    return(
        <Card className={classes.users}>
            <ul>
                {props.users.map((user)=>(
                    <li key={user.id}>
                        {user.name} ({user.age} Year Old)
                    </li>
                ))}
            </ul>
        </Card>
    )
}
export default UserList