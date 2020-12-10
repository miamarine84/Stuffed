import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom"; 
import HomePage from '../containers/HomePage';
import Dashboard from '../containers/Dashboard';
import Matches from '../containers/Matches';

const PrivateRoutes=()=>{
    return <Router>
        <Switch>
            <Route exact={true} path="/dashboard" component={Dashboard} />
            <Route exact={true} path="/home" component={HomePage} />
            <Route exact={true} path="/matches" component={Matches} />
            <Redirect to="/dashboard" />
        </Switch>
        </Router>
}
export default PrivateRoutes;