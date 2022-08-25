import './App.css';
import AddUsers from './Container/Users/AddUsers';
import UsersList from './Container/Users/UsersList';
import { useState } from 'react';

function App() {

  const [userList, setUserList] = useState([]);

  return (
    <div className="container">
      <header className="text-center text-light my-4">
        <h1 className="mb-4">Users List</h1>
      </header>
       <AddUsers />
       <UsersList userList={userList} />
    </div>
  );
}

export default App;
