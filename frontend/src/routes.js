import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Login from "./public/Login/Login";
import Settings from "./private/Settings/settings";
import Splash from "./public/Splash/Splash";

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact>
                <Login>

                </Login>
            </Route>

            <Route path="/settings">
                <Settings></Settings>
            </Route>
        </BrowserRouter>
    )
}

export default Routes;