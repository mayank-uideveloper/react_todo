const Validation = (value, localData) => {
    let error = {};

    if (!value.firstname) {
        error.firstname = "This field cannot be blank";
    }

    if (!value.lastname) {
        error.lastname = "This field cannot be blank";
    }

    if (!value.email) {
        error.email = "This field cannot be blank";
    } else if (!value.email.includes("@")) {
        error.email = "Invalid email address";
    } else if (localData.length > 0) {
        localData.filter((data) => {
            if (data.email === value.email) {
                error.email = "Email id already registered";
            }
            return true;
        });
    }

    if (!value.regPassword) {
        error.regPassword = "Please enter a valid password";
    } else if (value.regPassword.length < 6) {
        error.regPassword = "Passward should be more than 6 charaters";
    }

    if (!value.regConfirmPassword) {
        error.regConfirmPassword = "Please enter a valid password";
    } else if (value.regPassword !== value.regConfirmPassword) {
        error.regConfirmPassword = "Password not matched";
    } else if (value.regConfirmPassword.length < 6) {
        error.regConfirmPassword = "Passward should be more than 6 charaters";
    }

    // login logic for blank
    if (!value.username) {
        error.username = "This field cannot be blank";
    }

    if (!value.password) {
        error.password = "This field cannot be blank";
    }

    return error;
};

export default Validation;
