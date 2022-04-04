import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Login from "./public/Login/Login";
import Settings from "./private/Settings/settings";

function Routes() {

    function PrivateRoute({ children, ...rest }) {

        return (

            <Route {...rest} render={() => {

                return localStorage.getItem('token')
                ? children
                : <Redirect to="/"></Redirect>
            }}></Route>
        )
    }

    return (

        <BrowserRouter>

            <Route path="/" exact>
                <Login></Login>
            </Route>

            <PrivateRoute path="/settings">
                <Settings></Settings>
            </PrivateRoute>
            
        </BrowserRouter>
    )
}

export default Routes;