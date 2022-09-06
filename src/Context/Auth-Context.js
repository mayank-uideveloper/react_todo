import React, { useState, useEffect } from "react";

import { hasLoggedIn } from "../Helper/Constants";
import { storageInfo } from "../Helper/Storage";

export const AuthContext = React.createContext({
    isLoggedIn: false,
    isRegister: false,
    logoutHandler: () => {},
    toggleRegisterHandler: () => {},
    getLoginData: (username, password) => {},
});

export const AuthContextProvider = (props) => {
    const [loginState, setLoginState] = useState(false);
    const [userRegister, setUserRegister] = useState(false);

    storageInfo.registeredUserInfo();

    const loginData = storageInfo.renderUserObject();
    const logoutHandler = () => {
        setLoginState(false);
        localStorage.setItem(hasLoggedIn, JSON.stringify(false));
    };

    const toggleRegisterHandler = () => {
        setUserRegister(!userRegister);
    };

    const getLoginData = (username, password) => {
        loginData.filter((data) => {
            if (data.email === username && data.regPassword === password) {
                setLoginState(true);
                localStorage.setItem(hasLoggedIn, JSON.stringify(true));
            }
        });
    };

    useEffect(() => {
        const getStorage = localStorage.getItem(hasLoggedIn);
        if(getStorage === 'true') {
            setLoginState(true);
        }
    },[loginState])

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: loginState,
                isRegister: userRegister,
                isLogout: logoutHandler,
                toggleRegisterHandler: toggleRegisterHandler,
                getLoginData: getLoginData,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};
