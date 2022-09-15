import { hasLoggedIn, loginUser, registerUserInfo, taskListInfo } from "./Constants";


export const storageInfo = {
    registeredUserInfo: () => {
        let userConst = localStorage.getItem(registerUserInfo);
        let hasLoggin = localStorage.getItem(hasLoggedIn);
        let loggedInUserInfo = localStorage.getItem(loginUser);
        let taskList = localStorage.getItem(taskListInfo);

        if (userConst === null) {
            localStorage.setItem(registerUserInfo, JSON.stringify([]));
        }
        if (hasLoggin === null) {
            localStorage.setItem(hasLoggedIn, JSON.stringify(false));
        }

        if (loggedInUserInfo === null) {
            localStorage.setItem(loginUser, JSON.stringify({}));
        }

        if(taskList === null) {
            localStorage.setItem(taskListInfo, JSON.stringify([]));
        }
    },

    renderUserObject: () => {
        let userData = localStorage.getItem(registerUserInfo);

        let userStorage = {};

        if (userData) {
            userStorage = JSON.parse(userData);
        }
        return userStorage;
    },

    renderTaskObj: () => {
        let taskData = localStorage.getItem(taskListInfo);

        let taskStorage = {};

        if (taskData) {
            taskStorage = JSON.parse(taskData);
        }
        return taskStorage;
    },
};
