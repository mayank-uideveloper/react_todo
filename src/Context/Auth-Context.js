import React, { useState } from "react";

import { storageInfo } from "../Helper/Storage";
export const AuthContext = React.createContext({
    isLoggedIn: false,
    isRegister: false,
    logoutHandler: () => {},
    showRegisterHandler: () => {},
    hideRegisterHandler: () => {},
    getLoginData: (username, password) => {},
});

export const AuthContextProvider = (props) => {
    const [loginState, setLoginState] = useState(false);
    const [userRegister, setUserRegister] = useState(false);

    storageInfo.registeredUserInfo();

    const loginData = storageInfo.renderUserObject();
    const logoutHandler = () => {
        setLoginState(false);
    };

    const showRegisterHandler = () => {
        setUserRegister(!userRegister);
    };

    const hideRegisterHandler = () => {
        setUserRegister(false);
    };

    const getLoginData = (username, password) => {
        loginData.filter((data) => {
            if (data.email === username && data.regPassword === password) {
                setLoginState(true);
            }
        });
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: loginState,
                isRegister: userRegister,
                isLogout: logoutHandler,
                showRegisterHandler: showRegisterHandler,
                hideRegisterHandler: hideRegisterHandler,
                getLoginData: getLoginData,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};
