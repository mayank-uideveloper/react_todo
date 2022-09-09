const LoginValidation = (value) => {
    let error = {};

    if (!value.username.trim()) {
        error.username = "This field cannot be blank";
    }

    if (!value.password) {
        error.password = "This field cannot be blank";
    }

    return error;
};

export default LoginValidation;
