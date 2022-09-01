import React, {useContext} from "react";
import { AuthContext } from "../../Context/Auth-Context";
import ContainerCard from "../../UI/ContainerCard";
//import CustomButton from "../../UI/CustomButton";
import Login from "./Login";
import Register from "./Register";

const AuthenticationWrap = (props) => {
    const authData = useContext(AuthContext);
    return (
        <ContainerCard headingData="Welcome to Portal">
            {!authData.isRegister && <Login getLoginData={props.getLoginData} registerHandler={authData.showRegisterHandler}  />}
            {authData.isRegister && 
                <Register registerHandler={authData.hideRegisterHandler}  />
            }
            
        </ContainerCard>
    )
}

export default AuthenticationWrap;