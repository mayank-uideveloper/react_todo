import './App.css';
import AddUsers from './Container/Users/AddUsers';
import UsersList from './Container/Users/UsersList';
import { useState, useEffect } from 'react';

function App() {

  const userStoredData = () => {
    const savedInfo = localStorage.getItem("userInfo");
    const initialValue = JSON.parse(savedInfo);
    return initialValue || "";
  }

  const [userList, setUserList] = useState(userStoredData);

  const addUserDetails = (uName,uAge,uDes) => {

    setUserList((prevList) => {
      return [
        ...prevList,
        {
          id: Math.floor(Math.random().toString() * 1000),
          name:uName, 
          age:uAge,
          designation:uDes,
        }
      ]
    });
  }

  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(userList));
  }, [userList]);

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
