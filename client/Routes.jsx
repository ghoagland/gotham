import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import history from './history';
import Main from './components/Main';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route component={Main} />
    </Switch>
  </Router>
);

export default Routes;
