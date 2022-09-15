import React, { useContext, useState, useEffect } from "react";

import { storageInfo } from "../../Helper/Storage";

import { AuthContext } from "../../Context/Auth-Context";
import ContainerCard from "../../UI/ContainerCard";
import Login from "./Login/Login";
import Register from "./Regiser/Register";

const AuthenticationWrap = (props) => {
    const [registerUserAlert, setRegisterUserAlert] = useState(false);

    const abc = storageInfo.renderUserObject().length;
    useEffect(() => {
        console.log(storageInfo.renderUserObject().length)
        storageInfo.renderUserObject().length === 0 ? setRegisterUserAlert(true) : setRegisterUserAlert(false);
    }, [abc]);

    const authData = useContext(AuthContext);
    return (
        <ContainerCard headingData="Welcome to Portal">
            {!authData.isRegister && registerUserAlert && (
                <div className="alert alert-info" role="alert">
                    Oops! Seems like you never registered to our portal please
                    click on Register Now and then try to login again.
                </div>
            )}

            {!authData.isLoggedIn && !authData.isRegister && (
                <Login
                    getLoginData={props.getLoginData}
                    registerHandler={authData.toggleRegisterHandler}
                />
            )}
            {authData.isRegister && (
                <Register registerHandler={authData.toggleRegisterHandler} />
            )}
        </ContainerCard>
    );
};

export default AuthenticationWrap;
