import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './components/homepage/homepage';
import Login from './components/login/login';

const Routes = () => (
  <Switch>
    <Route path="/" component={Homepage} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Routes;
