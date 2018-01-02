import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './components/homepage/homepage';
import Login from './components/auth/login';
import Register from './components/auth/register';

const Routes = (props) => (
  <Switch>
    { props.userLoggedIn &&
      <Route exact path="/" component={Homepage} />
    }
    { !props.userLoggedIn &&
      <Route exact path="/" component={Login} />
    }
    <Route path="/register" component={Register} />
  </Switch>
);

export default Routes;
