import React ,{useState}from 'react';
import AddUser from './components/user/AddUser';
import UserList from './components/user/Userlist';

function App() {
  const [userList,setUserList]=useState([])
  const addUserHandler=(uName,uAge)=>{
    setUserList((preUserList)=>{
      return[...preUserList,{name:uName, age:uAge,id:Math.random().toString()}]
    })
  }
  return (
    <div>
     
<AddUser onAddUser={addUserHandler}/>
<UserList users={userList}/>
    </div>
  );
}

export default App;
