import CustomButton from "../../UI/CustomButton";
import { useState } from "react";

const AddUsers = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [enteredDesignation, setEnteredDesignation] = useState('');
    const [errorMsg,setErrorMsg] = useState(false);
    const errorMessage= {
        emptyMessage: 'Please enter a valid entry',
        negitiveValueMessage: 'Please enter a valid age'
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setErrorMsg(true);
            return;
        }

        if(Number(enteredAge) <= 0) {
            setErrorMsg(true);
            return;
        }

        props.addUserDetails(enteredUsername,enteredAge,enteredDesignation);
        setEnteredUsername('');
        setEnteredAge('');
        setEnteredDesignation('');
    }

    const userChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
        setErrorMsg(false);
    }

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
        setErrorMsg(false);
    }

    const designationChangeHandler = (e) => {
        setEnteredDesignation(e.target.value);
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="form-container mb-3">
                    <label htmlFor="username" className="add text-light">Username*</label>
                    <input autoComplete="off" type="text" value={enteredUsername} onChange={userChangeHandler} className="form-control" name="add" id="username" />
                    {enteredUsername.length === 0 && errorMsg ? <div style={{fontSize:'12px'}} className="text-danger fst-italic mt-1">{errorMessage.emptyMessage}</div> : null}
                </div>
                <div className="form-container mb-3">
                    <label htmlFor="age" className="add text-light">Age*</label>
                    <input type="number" autoComplete="off" value={enteredAge} onChange={ageChangeHandler} className="form-control" name="add" id="age" />
                    {enteredAge.length === 0 && errorMsg ? <div style={{fontSize:'12px'}} className="text-danger fst-italic mt-1">{errorMessage.emptyMessage}</div> : null}
                    {enteredAge.length > 0 && enteredAge <= 0 && errorMsg ? <div style={{fontSize:'12px'}} className="text-danger fst-italic mt-1">{errorMessage.negitiveValueMessage}</div> : null}
                </div>
                <div className="form-container mb-3">
                    <label htmlFor="designation" className="add text-light">Designation</label>
                    <input type="text" autoComplete="off" value={enteredDesignation} onChange={designationChangeHandler} className="form-control" name="add" id="designation" />
                </div>

                <CustomButton actionType="submit" cusClass="btn-dark w-100 mt-3">Add User</CustomButton>
            </form>
        </>
    )
}

export default AddUsers;