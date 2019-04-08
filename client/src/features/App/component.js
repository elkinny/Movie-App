import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ErrorBoundary from 'features/ErrorBoundary';

import { Header, Footer } from 'shared';
import SearchMovie from 'features/SearchMovie';
import MovieDetails from 'features/MovieDetails';

import { Provider } from 'react-redux';
import store from 'core/store';

import styles from './style.scss';

const AppComponent = () => {
  return (
    <Provider store={store}>
      <Header />
      <main className={styles.container}>
        <ErrorBoundary>
          <Router>
            <Switch>
              <Route exact path="/" component={SearchMovie} />
              <Route exact path="/:id" component={MovieDetails} />
            </Switch>
          </Router>
        </ErrorBoundary>
      </main>
      <Footer />
    </Provider>
  );
};

export default AppComponent;
