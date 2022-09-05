import { useEffect, useState } from "react";

import { storageInfo } from "../../Helper/Storage";


// Error handling left in this rest all done

import CustomButton from "../../UI/CustomButton";

const Register = (props) => {

    const [userRegistration, setUserRegistration] = useState({
        firstName: '',
        lastName: '',
        email: '',
        regPassword: '',
        regConfirmPassword: ''
    })

    const [storeData, setStoreData] = useState(storageInfo.renderUserObject);

    const changehandler = (e) => {
        const value = e.target.value;
        setUserRegistration({
            ...userRegistration,
            [e.target.name] : value
        });
    }
    const userRegisterHandler = (e) => {
        e.preventDefault();

        setStoreData((prevData) => {
            const newItem = [...prevData,{...userRegistration}]
            
            return newItem
        })

        setUserRegistration({
            firstName: '',
            lastName: '',
            email: '',
            regPassword: '',
            regConfirmPassword: ''
        })

    }

    useEffect(() => {
        localStorage.setItem('registeredUserInfo', JSON.stringify(storeData))
    },[storeData])

    return(
        <>
            <form onSubmit={userRegisterHandler}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-container mb-3">
                            <label htmlFor="username" className="add text-light">First name*</label>
                            <input autoComplete="off" type="text" value={userRegistration.firstName} onChange={changehandler} className="form-control" name="firstName" id="username" />
                        </div>

                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-container mb-3">
                            <label htmlFor="username" className="add text-light">Last name*</label>
                            <input autoComplete="off" type="text" value={userRegistration.lastName} onChange={changehandler} className="form-control" name="lastName" id="username" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-container mb-3">
                            <label htmlFor="username" className="add text-light">Email address*</label>
                            <input autoComplete="off" type="text" value={userRegistration.email} onChange={changehandler} className="form-control" name="email" id="username" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="form-container mb-3">
                            <label htmlFor="password" className="add text-light">Password*</label>
                            <input autoComplete="off" type="password" value={userRegistration.regPassword} onChange={changehandler} className="form-control" name="regPassword" id="password" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="form-container mb-3">
                            <label htmlFor="password" className="add text-light">Confirm Password*</label>
                            <input autoComplete="off" type="password" value={userRegistration.regConfirmPassword} onChange={changehandler} className="form-control" name="regConfirmPassword" id="password" />
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