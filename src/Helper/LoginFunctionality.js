import { useState, useContext } from "react";

import {AuthContext} from '../Context/Auth-Context';
import { hasLoggedIn } from "./Constants";



const LoginFunctionality = (validate) => {
    const ctx = useContext(AuthContext);
    const localData = localStorage.getItem(hasLoggedIn);

    const [userInfo, setUserInfo] = useState({
        username: '',
        password: ''
    })

    const [errors, setErrors] = useState({});

    const [loginMatch, setLoginMatch] = useState(false);

    const loginChangeHandler = (e) => {
        const {name, value} = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        })
        
    }
    

    const loginHandler = (e) => {
        e.preventDefault();

        if(localData === 'false') {
            setLoginMatch(true);
        }
        setErrors(validate(userInfo));
        ctx.getLoginData(userInfo.username, userInfo.password);
        
        setUserInfo({
            username: '',
            password: ''
        })
    };

    return [loginChangeHandler, loginHandler, userInfo, errors, loginMatch]
}

export default LoginFunctionality;