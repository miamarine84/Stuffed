import React, { Component } from "react";
import NavTabs from "../NavTabs"
import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";
import ContactMe from "../ContactMe";

import {BrowserRouter as Router,Route, Switch,Redirect} from 'react-router-dom';


class NavRoutes extends Component{
    state={
        currentPage:"About"
    }
    handlePageChange=page=>{
        this.setState({currentPage:page});
    }
    renderPage=()=>{
        return <Switch>
            <Route exact path="/about" component={AboutMe}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/contact" component={ContactMe}/>
            <Redirect to="/about"/>
        </Switch>
    }
    render(){
        return(
            <div>
        {/* we need to have our entire application wrapped in a "Router". */}
        <Router>
           <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
        </Router>
      </div>
        )
    }
}
export default NavRoutes;