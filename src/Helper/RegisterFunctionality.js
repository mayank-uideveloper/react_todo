import { useEffect, useState } from "react";

import { storageInfo } from "./Storage";

const RegisterFunctionality = (validate) => {
    const [userRegistration, setUserRegistration] = useState(() => ({
        firstname: "",
        lastname: "",
        email: "",
        regPassword: "",
        regConfirmPassword: "",
    }));

    const [errors, setErrors] = useState(() => ({}));
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
        
        let err = validate(userRegistration, storeData);
        setErrors((prev) => ({ ...err }));
        console.log(Object.keys(err));
        
        console.log(userRegistration);
        if (
            userRegistration.firstname !== "" &&
            userRegistration.lastname !== "" &&
            userRegistration.email !== "" &&
            userRegistration.regPassword !== "" &&
            userRegistration.regConfirmPassword !== "" &&
            Object.keys(err).length === 0
        ) {
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
