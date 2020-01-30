import React, { Fragment } from 'react';
import Dashboard from './component/dashboard/Dashboard';
import {Route, Switch} from 'react-router-dom';
import Profile from './component/profile/Profile';
import Login from './component/login/Login';


function App() {
  return (
    <Fragment>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/profile" component={Profile}/>
        </Switch>
    </Fragment>
  );
}

export default App;
