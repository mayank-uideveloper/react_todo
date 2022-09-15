import React, { useContext } from "react";
import "./App.css";

import Auth from "./Container/Auth/AuthenticationWrap";
import Header from "./Container/Layout/Header";
import List from "./Container/List/List";
import { AuthContext } from "./Context/Auth-Context";

function App() {
    const ctx = useContext(AuthContext);

    return (
        <>
            <Header />
            {!ctx.isLoggedIn && <Auth />}
            {ctx.isLoggedIn && <List />}
        </>
    );
}

export default App;
