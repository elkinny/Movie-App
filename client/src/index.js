import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from 'containers/App';
import SearchForm from 'containers/SearchForm';

render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={SearchForm} />
      </Switch>
    </App>
  </Router>,
  document.getElementById('root'),
);
