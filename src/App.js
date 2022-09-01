import React, {useState} from 'react';
import './App.css';
import Auth from './Container/Auth/AuthenticationWrap';
import Header from './Container/Layout/Header';
import { AuthContext } from './Context/Auth-Context';
import UserModule from './Container/Users/UserModule';
import ContainerCard from './UI/ContainerCard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRegister, setUserRegister] = useState(false);
  const [loginValid, setLoginValid] = useState(false);
  const [password, setPassword] = useState('');

  const logoutHandler = () => {
    setIsLoggedIn(false);
  }

  const showRegisterHandler = () => {
    setUserRegister(true)
  }

  const hideRegisterHandler = () => {
    setUserRegister(false)
  }

  const getLoginData = (username,password) => {

    if(username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
    }
  }

  return (
      <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        isRegister:userRegister,
        isLogout: logoutHandler,
        showRegisterHandler: showRegisterHandler,
        hideRegisterHandler: hideRegisterHandler
      }}>
        <Header />
        {!isLoggedIn &&
          <Auth  getLoginData={getLoginData} />
        }
        {isLoggedIn && 
          <ContainerCard>
            <UserModule />
          </ContainerCard>
        }
      </AuthContext.Provider>
      
  );
}

export default App;
