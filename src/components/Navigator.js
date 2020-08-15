import React from 'react'
import { Route, Switch } from "react-router-dom";

import Account from "../pages/Account";
import OrderDetails from "../pages/OrderDetails";
import Orders from "../pages/Orders";
import Overview from "../pages/Overview";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Page404 from "../pages/404";
import PrivateRoute from './PrivateRoute'


function Navigator() {
    return (
        <Switch>
            <PrivateRoute exact path='/' component={Overview} />
            <PrivateRoute path='/Account' component={Account} />
            <PrivateRoute exact path='/Orders' component={Orders} />
            <PrivateRoute path='/Orders/:id' component={OrderDetails} />
            <Route path='/SignIn' component={Login} />
            <Route path='/SignUp' component={SignUp} />
            <Route component={Page404} />
        </Switch>
    );
}

export default Navigator;