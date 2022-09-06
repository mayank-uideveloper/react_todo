import { hasLoggedIn } from "./Constants";


export const storageInfo = {
    registeredUserInfo: () => {
        let userConst = localStorage.getItem("registeredUserInfo");
        let hasLoggin = localStorage.getItem(hasLoggedIn);

        if (userConst === null) {
            localStorage.setItem("registeredUserInfo", JSON.stringify([]));
        }
        if (hasLoggin === null) {
            localStorage.setItem(hasLoggedIn, JSON.stringify(false));
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
