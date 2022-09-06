import AddUsers from "./AddUsers";
import UsersList from "./UsersList";
import { useState, useEffect } from "react";

const UserModule = () => {
    const userStoredData = () => {
        const savedInfo = localStorage.getItem("userInfo");
        const initialValue = JSON.parse(savedInfo);
        return initialValue || "";
    };

    const [userList, setUserList] = useState(userStoredData);

    const addUserDetails = (uName, uAge, uDes) => {
        setUserList((prevList) => {
            return [
                ...prevList,
                {
                    id: Math.floor(Math.random().toString() * 1000),
                    name: uName,
                    age: uAge,
                    designation: uDes,
                },
            ];
        });
    };

    useEffect(() => {
        localStorage.setItem("userInfo", JSON.stringify(userList));
    }, [userList]);

    const deleteUser = (id) => {
        const newUserList = userList.filter((item) => item.id !== id);
        setUserList(newUserList);
    };

    return (
        <>
            <AddUsers addUserDetails={addUserDetails} />
            <UsersList userList={userList} deleteUser={deleteUser} />
        </>
    );
};

export default UserModule;
