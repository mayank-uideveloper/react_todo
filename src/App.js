import './App.css';
import AddUsers from './Container/Users/AddUsers';
import UsersList from './Container/Users/UsersList';
import { useState } from 'react';

function App() {

  const [userList, setUserList] = useState([]);

  const addUserDetails = (uName,uAge,uDes) => {
    console.log(uName,uAge,uDes);

    setUserList((prevList) => {
      return [...prevList,{
        id: Math.floor(Math.random().toString() * 1000),
        name:uName, 
        age:uAge,
        designation:uDes,
      }]
    });
  }

  const deleteUser = (id) => {
    const newUserList = userList.filter((item) => item.id !== id);
    setUserList(newUserList);
  }

  return (
    <div className="container">
      <header className="text-center text-light my-4">
        <h1 className="mb-4">Users List</h1>
      </header>
       <AddUsers addUserDetails={addUserDetails} />
       <UsersList userList={userList} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
