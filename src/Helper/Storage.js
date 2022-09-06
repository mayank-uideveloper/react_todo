export const storageInfo = {
    registeredUserInfo: () => {
        let userConst = localStorage.getItem("registeredUserInfo");

        if (userConst === null) {
            localStorage.setItem("registeredUserInfo", JSON.stringify([]));
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
