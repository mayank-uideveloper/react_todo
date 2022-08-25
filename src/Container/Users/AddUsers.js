import CustomButton from "../../UI/CustomButton";
import { useState } from "react";

const AddUsers = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [enteredDesignation, setEnteredDesignation] = useState('');


    const submitHandler = (event) => {
        event.preventDefault();
        props.addUserDetails(enteredUsername,enteredAge,enteredDesignation);
        setEnteredUsername('');
        setEnteredAge('');
        setEnteredDesignation('');
    }

    const userChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    }

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    }

    const designationChangeHandler = (e) => {
        setEnteredDesignation(e.target.value);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-container mb-3">
                <label htmlFor="username" className="add text-light">Username</label>
                <input autoComplete="off" type="text" value={enteredUsername} onChange={userChangeHandler} className="form-control" name="add" id="username" />
            </div>
            <div className="form-container mb-3">
                <label htmlFor="age" className="add text-light">Age</label>
                <input type="number" autoComplete="off" value={enteredAge} onChange={ageChangeHandler} className="form-control" name="add" id="age" />
            </div>
            <div className="form-container mb-3">
                <label htmlFor="designation" className="add text-light">Designation</label>
                <input type="text" autoComplete="off" value={enteredDesignation} onChange={designationChangeHandler} className="form-control" name="add" id="designation" />
            </div>

            <CustomButton actionType="submit" cusClass="btn-dark w-100 mt-3">Add User</CustomButton>
        </form>
    )
}

export default AddUsers;