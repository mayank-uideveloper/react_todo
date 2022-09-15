import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../Context/Auth-Context";

import { storageInfo } from "../../../Helper/Storage";


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
    const authData = useContext(AuthContext);
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

        if (Object.keys(err).length === 0) {
            setStoreData((prevData) => {
                const newItem = [...prevData, { ...userRegistration }];
                return newItem;
            });

            // setUserRegistration({
            //     firstname: "",
            //     lastname: "",
            //     email: "",
            //     regPassword: "",
            //     regConfirmPassword: "",
            // });
            setTimeout(() => {
                authData.toggleRegisterHandler();
            },400)
            
        }
    };

    //insphere.mayank@gmail.com

    useEffect(() => {
        localStorage.setItem("registeredUserInfo", JSON.stringify(storeData));
    }, [storeData]);

    return { changehandler, userRegistration, userRegisterHandler, errors };
};

export default RegisterFunctionality;
