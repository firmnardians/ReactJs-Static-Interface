import React, { Fragment } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './component/home/Home';
import Login from './component/login/Login';
import Dashboard from './component/dashboard/Dashboard';
import DashboardProfile from './component/dashboard/DashboardProfile/DashboardProfile';
import DashboardCustomer from './component/dashboard/DashboardCustomer/DashboardCustomer';
import DashboardReport from './component/dashboard/DashboardReport/DashboardReport';

function App() {
  return (
    <Fragment>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/DashboardProfile" component={DashboardProfile}/>
          <Route path="/DashboardCustomer" component={DashboardCustomer}/>
          <Route path="/DashboardReport" component={DashboardReport}/>
        </Switch>
    </Fragment>
  );
}

export default App;
