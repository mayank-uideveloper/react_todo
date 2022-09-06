import React, { useContext, useState, useEffect } from "react";

import { storageInfo } from "../../Helper/Storage";

import { AuthContext } from "../../Context/Auth-Context";
import ContainerCard from "../../UI/ContainerCard";
import Login from "./Login";
import Register from "./Register";

const AuthenticationWrap = (props) => {
    const [registerUserAlert, setRegisterUserAlert] = useState(false);

    useEffect(() => {
        if (storageInfo.renderUserObject().length === 0) {
            setRegisterUserAlert(true);
        }
    }, []);
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
                    registerHandler={authData.showRegisterHandler}
                />
            )}
            {authData.isRegister && (
                <Register registerHandler={authData.hideRegisterHandler} />
            )}
        </ContainerCard>
    );
};

export default AuthenticationWrap;
