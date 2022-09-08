import { useEffect, useState } from "react";

import { storageInfo } from "./Storage";

const RegisterFunctionality = (validate) => {
    const [userRegistration, setUserRegistration] = useState({
        firstname: "",
        lastname: "",
        email: "",
        regPassword: "",
        regConfirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const [storeData, setStoreData] = useState(storageInfo.renderUserObject);

    const changehandler = (e) => {
        const { name, value } = e.target;
        setUserRegistration({
            ...userRegistration,
            [name]: value,
        });
    };

    const userRegisterHandler = (e) => {
        e.preventDefault();

        setErrors(validate(userRegistration, storeData));
        console.log(errors);
        console.log(JSON.stringify(errors));
        if (
            userRegistration.firstname !== "" &&
            userRegistration.lastname !== "" &&
            userRegistration.email !== "" &&
            userRegistration.regPassword !== "" &&
            userRegistration.regConfirmPassword !== "" &&
            JSON.stringify(errors) === '{}'
        ) {
            console.log('may');
            setStoreData((prevData) => {
                const newItem = [...prevData, { ...userRegistration }];
                return newItem;
            });

            setUserRegistration({
                firstname: "",
                lastname: "",
                email: "",
                regPassword: "",
                regConfirmPassword: "",
            });
        }
    };

    useEffect(() => {
        localStorage.setItem("registeredUserInfo", JSON.stringify(storeData));
    }, [storeData]);

    return { changehandler, userRegistration, userRegisterHandler, errors };
};

export default RegisterFunctionality;
