import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from 'containers/App';
import MoviesList from 'containers/MoviesList';

render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={MoviesList} />
      </Switch>
    </App>
  </Router>,
  document.getElementById('root'),
);
