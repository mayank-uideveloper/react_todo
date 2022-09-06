import React, { useContext } from "react";
import { AuthContext } from "../../Context/Auth-Context";
import { ProjectImages } from "../../Helper/Constants";
import CustomButton from "../../UI/CustomButton";

const Header = () => {
    const authData = useContext(AuthContext);

    return (
        <div className="app_header">
            <div className="app_header_logo">
                <img src={ProjectImages.LOGO_IMAGE} alt="logo" />
            </div>

            {authData.isLoggedIn && (
                <div className="app_header_logout-btn">
                    <CustomButton
                        actionType="submit"
                        clickEvent={authData.isLogout}
                    >
                        Logout
                    </CustomButton>
                </div>
            )}
        </div>
    );
};

export default Header;
