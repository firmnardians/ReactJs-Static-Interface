import React, { Fragment } from 'react';
import Home from './component/home/Home';
import {Route, Switch} from 'react-router-dom';
import Login from './component/login/Login';
import Dashboard from './component/dashboard/Dashboard';
import EditProfile from './component/dashboard/DashboardEditProfile/EditProfile';


function App() {
  return (
    <Fragment>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/EditProfile" component={EditProfile}/>
        </Switch>
    </Fragment>
  );
}

export default App;
