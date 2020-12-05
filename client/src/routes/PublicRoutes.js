import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom"; 
import HomePage from '../containers/HomePage';
import LoginPage from '../containers/Login';
import SignUp from '../components/SignUp';
import Dashboard from '../containers/Dashboard';


const PublicRoutes=()=>{
    return <Router>
        <Switch>
            <Route exact={true} path="/dashboard" component={Dashboard} />
            <Route exact={true} path="/home" component={HomePage} />
            <Route exact={true} path="/login" component={LoginPage} />
            <Route exact={true} path="/signup" component={SignUp} />
            <Route exact={true} path="/home" component={HomePage} />
            
            <Redirect to="/home" />
        </Switch>
        </Router>
}
export default PublicRoutes;