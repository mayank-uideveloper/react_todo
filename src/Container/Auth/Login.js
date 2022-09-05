import React, {useState} from "react";

import CustomButton from "../../UI/CustomButton";

const Login = (props) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    

    // login concept left

    const userChangeHandler = (e) => {
        setUserName(e.target.value);
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const loginHandler = (e) => {
        props.getLoginData(userName,password);
        e.preventDefault();
          setUserName('');
          setPassword('');
      }
    
    return(
        <>
            <form onSubmit={loginHandler}>
                <div className="form-container mb-3">
                    <label htmlFor="username" className="add text-light">Username*</label>
                    <input autoComplete="off" type="text" value={userName} onChange={userChangeHandler} className="form-control" name="add" id="username" />
                </div>

                <div className="form-container mb-3">
                    <label htmlFor="password" className="add text-light">Password*</label>
                    <input autoComplete="off" type="password" value={password} onChange={passwordChangeHandler} className="form-control" name="add" id="password" />
                </div>
            <CustomButton actionType="submit" cusClass="w-100">Login</CustomButton>
            </form>
            <div className="text-center">
                <button onClick={props.registerHandler} className="btn text-light mt-4 text-center cursor-pointer">Register Now</button>
            </div>
        </>
    )
}

export default Login;