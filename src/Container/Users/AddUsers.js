import { useState } from "react";

import CustomButton from "../../UI/CustomButton";

const AddUsers = (props) => {
    const [userInfor, setUserInfor] = useState({
        username: "",
        age: "",
        designation: "",
    });

    const submitHandler = (event) => {
        event.preventDefault();
        setUserInfor({
            username: "",
            age: "",
            designation: "",
        });
    };

    const userChangeHandler = (e) => {
        setUserInfor({
            ...userInfor,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="form-container mb-3">
                    <label htmlFor="username" className="add text-light">
                        Username*
                    </label>
                    <input
                        autoComplete="off"
                        type="text"
                        value={userInfor.username}
                        onChange={userChangeHandler}
                        className="form-control"
                        name="username"
                        id="username"
                    />
                </div>
                <div className="form-container mb-3">
                    <label htmlFor="age" className="add text-light">
                        Age*
                    </label>
                    <input
                        type="number"
                        autoComplete="off"
                        value={userInfor.age}
                        onChange={userChangeHandler}
                        className="form-control"
                        name="age"
                        id="age"
                    />
                </div>
                <div className="form-container mb-3">
                    <label htmlFor="designation" className="add text-light">
                        Designation
                    </label>
                    <input
                        type="text"
                        autoComplete="off"
                        value={userInfor.designation}
                        onChange={userChangeHandler}
                        className="form-control"
                        name="designation"
                        id="designation"
                    />
                </div>

                <CustomButton
                    actionType="submit"
                    cusClass="btn-dark w-100 mt-3"
                >
                    Add User
                </CustomButton>
            </form>
        </>
    );
};

export default AddUsers;
