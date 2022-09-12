import LoginFunctionality from "./LoginFunctionality";
import { LoginValidation as validate } from "../../../Helper/Validations";
import CustomButton from "../../../UI/CustomButton";

const Login = (props) => {
    const [loginChangeHandler, loginHandler, userInfo, errors, loginMatch] =
        LoginFunctionality(validate);

    return (
        <>
            {loginMatch && (
                <div className="alert alert-danger" role="alert">
                    Invalid username and password
                </div>
            )}
            <form onSubmit={loginHandler}>
                <div className="form-container mb-3">
                    <label htmlFor="username" className="add text-light">
                        Username*
                    </label>
                    <input
                        type="text"
                        value={userInfo.username}
                        onChange={loginChangeHandler}
                        className="form-control"
                        name="username"
                        id="username"
                    />
                    {errors.username && (
                        <div className="error_field">{errors.username}</div>
                    )}
                </div>

                <div className="form-container mb-3">
                    <label htmlFor="password" className="add text-light">
                        Password*
                    </label>
                    <input
                        autoComplete="off"
                        type="password"
                        value={userInfo.password}
                        onChange={loginChangeHandler}
                        className="form-control"
                        name="password"
                        id="password"
                    />
                    {errors.password && (
                        <div className="error_field">{errors.password}</div>
                    )}
                </div>
                <CustomButton actionType="submit" cusClass="w-100">
                    Login
                </CustomButton>
            </form>
            <div className="text-center">
                <button
                    onClick={props.registerHandler}
                    className="btn text-light mt-4 text-center cursor-pointer"
                >
                    Register Now
                </button>
            </div>
        </>
    );
};

export default Login;
