import React, {useState} from "react";

import { storageInfo } from "../Helper/Storage";
export const AuthContext = React.createContext({
    isLoggedIn: false,
    isRegister:false,
});

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRegister, setUserRegister] = useState(false);

    storageInfo.registeredUserInfo();

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

    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        isRegister:userRegister,
        isLogout: logoutHandler,
        showRegisterHandler: showRegisterHandler,
        hideRegisterHandler: hideRegisterHandler,
        getLoginData: getLoginData
      }}>
        {props.children}
    </AuthContext.Provider>
}