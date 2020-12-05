import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom"; 
import HomePage from '../containers/HomePage';
import LoginPage from '../containers/Login';
import SignUp from '../components/SignUp';
import Discover from '../pages/Discover';
import Matches from '../containers/Matches';
const PublicRoutes=()=>{
    return <Router>
        <Switch>
            <Route exact={true} path="/discover" component={Discover} />
            <Route exact={true} path="/home" component={HomePage} />
            <Route exact={true} path="/login" component={LoginPage} />
            <Route exact={true} path="/signup" component={SignUp} />
            <Route exact={true} path="/home" component={HomePage} />
            <Route exact={true} path="/Matches" component={Matches} />
            <Redirect to="/home" />
        </Switch>
        </Router>
}
export default PublicRoutes;