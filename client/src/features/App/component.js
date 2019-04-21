import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Header, Footer } from 'shared';
import SearchMovie from 'features/SearchMovie';
import MovieDetails from 'features/MovieDetails';
import NotFound from 'features/NotFound';
import ErrorBoundary from 'features/ErrorBoundary';

import store from 'core/store';

import styles from './style.scss';

const AppComponent = () => {
  return (
    <Provider store={store}>
      <Header />
      <main className={styles.container}>
        <ErrorBoundary>
          <Router basename={process.env.NODE_ENV === 'production' ? '/Movie-app' : ''}>
            <Switch>
              <Route exact path="/" component={SearchMovie} />
              <Route path="/search/:query" component={SearchMovie} />
              <Route path="/film/:id" component={MovieDetails} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Router>
        </ErrorBoundary>
      </main>
      <Footer />
    </Provider>
  );
};

export default AppComponent;
