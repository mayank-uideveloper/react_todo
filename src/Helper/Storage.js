import { hasLoggedIn, loginUser } from "./Constants";


export const storageInfo = {
    registeredUserInfo: () => {
        let userConst = localStorage.getItem("registeredUserInfo");
        let hasLoggin = localStorage.getItem(hasLoggedIn);
        let loggedInUserInfo = localStorage.getItem(loginUser);

        if (userConst === null) {
            localStorage.setItem("registeredUserInfo", JSON.stringify([]));
        }
        if (hasLoggin === null) {
            localStorage.setItem(hasLoggedIn, JSON.stringify(false));
        }

        if (loggedInUserInfo === null) {
            localStorage.setItem(loginUser, JSON.stringify({}));
        }
    },

    renderUserObject: () => {
        let userData = localStorage.getItem("registeredUserInfo");

        let userStorage = {};

        if (userData) {
            userStorage = JSON.parse(userData);
        }
        return userStorage;
    },
};
