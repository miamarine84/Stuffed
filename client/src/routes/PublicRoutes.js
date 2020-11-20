import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom"; 
import HomePage from '../containers/HomePage';
import LoginPage from '../containers/Login';

const PublicRoutes=()=>{
    return <Router>
        <Switch>
            <Route exact={true} path="/login" component={LoginPage} />
            <Route exact={true} path="/home" component={HomePage} />
            <Redirect to="/home" />
        </Switch>
        </Router>
}
export default PublicRoutes;