import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Dashboard.css';
import DashboardWelcome from './DashboardWelcome/DashboardWelcome';
import DashboardCustomer from './DashboardCustomer/DashboardCustomer';
import DashboardProfile from './DashboardProfile/DashboardProfile';
import DashboardReport from './DashboardReport/DashboardReport';


class Dashboard extends Component{
    render(){
        return(
            <Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/Dashboard">
                            <DashboardWelcome/>
                        </Route>
                        <Route path="/DashboardReport">
                            <DashboardReport/>
                        </Route>
                        <Route path="/DashboardCustomer">
                            <DashboardCustomer />
                        </Route>
                        <Route path="/DashboardProfile">
                            <DashboardProfile/>
                        </Route>
                    </Switch>      
                </Router>
            </Fragment>
        )
    }
}

export default Dashboard;