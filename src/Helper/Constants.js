import logo from "./../Assets/logo.png";

//default constants

export const hasLoggedIn = "hasLoggin";
export const loginUser = "loggedInUserInfo";
export const registerUserInfo = "registeredUserInfo";
export const taskListInfo = "taskList";

export const ProjectImages = {
    LOGO_IMAGE: logo,
};

export const priorityDropdown = [
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
];

export const statusDropdown = [
    { value: "inprogress", label: "In Progress" },
    { value: "pending", label: "Pending" },
    { value: "completed", label: "Completed" },
];
