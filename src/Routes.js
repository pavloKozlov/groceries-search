import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/details/:id" component={DetailsPage} />
      <Route exact path="/" component={HomePage} />
    </Switch>
  </Router>
);

export default Routes;
