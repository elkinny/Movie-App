import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from 'containers/App';
import SearchForm from 'containers/SearchForm';
import MovieDetails from 'containers/MovieDetails';

render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={SearchForm} />
        <Route exact path="/about/:id" component={MovieDetails} />
      </Switch>
    </App>
  </Router>,
  document.getElementById('root'),
);
