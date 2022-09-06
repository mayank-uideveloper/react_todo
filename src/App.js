import React, { useContext } from "react";
import "./App.css";

import Auth from "./Container/Auth/AuthenticationWrap";
import Header from "./Container/Layout/Header";
import UserModule from "./Container/Users/UserModule";
import { AuthContext } from "./Context/Auth-Context";
import ContainerCard from "./UI/ContainerCard";

function App() {
    const ctx = useContext(AuthContext);

    return (
        <>
            <Header />
            {!ctx.isLoggedIn && <Auth />}
            {ctx.isLoggedIn && (
                <ContainerCard>
                    <UserModule />
                </ContainerCard>
            )}
        </>
    );
}

export default App;
