import { useState } from "react";
import CustomButton from "../../UI/CustomButton";

const Register = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [regConfirmPassword, setRegConfirmPassword] = useState('');

    const changehandler = (e) => {

    }
    const userRegisterHandler = (e) => {
        e.preventDefault();
    }

    return(
        <>
            <form onSubmit={userRegisterHandler}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-container mb-3">
                            <label htmlFor="username" className="add text-light">First name*</label>
                            <input autoComplete="off" type="text" value={firstName} onChange={changehandler} className="form-control" name="add" id="username" />
                        </div>

                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-container mb-3">
                            <label htmlFor="username" className="add text-light">Last name*</label>
                            <input autoComplete="off" type="text" value={lastName} onChange={changehandler} className="form-control" name="add" id="username" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-container mb-3">
                            <label htmlFor="username" className="add text-light">Email address*</label>
                            <input autoComplete="off" type="text" value={email} onChange={changehandler} className="form-control" name="add" id="username" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="form-container mb-3">
                            <label htmlFor="password" className="add text-light">Password*</label>
                            <input autoComplete="off" type="password" value={regPassword} onChange={changehandler} className="form-control" name="add" id="password" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="form-container mb-3">
                            <label htmlFor="password" className="add text-light">Confirm Password*</label>
                            <input autoComplete="off" type="password" value={regConfirmPassword} onChange={changehandler} className="form-control" name="add" id="password" />
                        </div>
                    </div>
                </div>
                <CustomButton actionType="submit" cusClass="w-100">Register</CustomButton>  
            </form>
            <div className="text-center">
                <button onClick={props.registerHandler} className="btn text-light mt-4 mb-5 text-center cursor-pointer">Back to Login</button>
            </div>
        </>
    )
}

export default Register;