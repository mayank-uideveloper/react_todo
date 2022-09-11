import RegisterFunctionality from "./RegisterFunctionality";
import { RegisterValidation as validate } from "../../../Helper/Validations";
import CustomButton from "../../../UI/CustomButton";

const Register = (props) => {
    const { changehandler, userRegistration, userRegisterHandler, errors } =
        RegisterFunctionality(validate);

    return (
        <>
            <form onSubmit={userRegisterHandler}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-container mb-3">
                            <label
                                htmlFor="firstname"
                                className="add text-light"
                            >
                                First name*
                            </label>
                            <input
                                autoComplete="off"
                                type="text"
                                value={userRegistration.firstname}
                                onChange={changehandler}
                                className="form-control"
                                name="firstname"
                                id="firstname"
                            />
                            {errors.firstname && (
                                <div className="error_field">
                                    {errors.firstname}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-container mb-3">
                            <label
                                htmlFor="lastname"
                                className="add text-light"
                            >
                                Last name*
                            </label>
                            <input
                                autoComplete="off"
                                type="text"
                                value={userRegistration.lastname}
                                onChange={changehandler}
                                className="form-control"
                                name="lastname"
                                id="lastname"
                            />
                            {errors.lastname && (
                                <div className="error_field">
                                    {errors.lastname}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-container mb-3">
                            <label htmlFor="email" className="add text-light">
                                Email address*
                            </label>
                            <input
                                autoComplete="off"
                                type="text"
                                value={userRegistration.email}
                                onChange={changehandler}
                                className="form-control"
                                name="email"
                                id="email"
                            />
                            {errors.email && (
                                <div className="error_field">
                                    {errors.email}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="form-container mb-3">
                            <label
                                htmlFor="regPassword"
                                className="add text-light"
                            >
                                Password*
                            </label>
                            <input
                                autoComplete="off"
                                type="password"
                                value={userRegistration.regPassword}
                                onChange={changehandler}
                                className="form-control"
                                name="regPassword"
                                id="regPassword"
                            />
                            {errors.regPassword && (
                                <div className="error_field">
                                    {errors.regPassword}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="form-container mb-3">
                            <label
                                htmlFor="regConfirmPassword"
                                className="add text-light"
                            >
                                Confirm Password*
                            </label>
                            <input
                                autoComplete="off"
                                type="password"
                                value={userRegistration.regConfirmPassword}
                                onChange={changehandler}
                                className="form-control"
                                name="regConfirmPassword"
                                id="regConfirmPassword"
                            />
                            {errors.regConfirmPassword && (
                                <div className="error_field">
                                    {errors.regConfirmPassword}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <CustomButton actionType="submit" cusClass="w-100">
                    Register
                </CustomButton>
            </form>
            <div className="text-center">
                <button
                    onClick={props.registerHandler}
                    className="btn text-light mt-4 mb-5 text-center cursor-pointer"
                >
                    Back to Login
                </button>
            </div>
        </>
    );
};

export default Register;
