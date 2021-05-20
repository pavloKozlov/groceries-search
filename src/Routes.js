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
      <Route path="/details/:id">
        <DetailsPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
