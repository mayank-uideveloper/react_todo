import React, { useContext } from "react";
import "./App.css";

import Auth from "./Container/Auth/AuthenticationWrap";
import Header from "./Container/Layout/Header";
import { AuthContext } from "./Context/Auth-Context";
import CustomCard from "./UI/CustomCard";

function App() {
    const ctx = useContext(AuthContext);

    return (
        <>
            <Header />
            {!ctx.isLoggedIn && <Auth />}
            {ctx.isLoggedIn && (
                <CustomCard>
                    Task List

                    Add task
                </CustomCard>
            )}
        </>
    );
}

export default App;
