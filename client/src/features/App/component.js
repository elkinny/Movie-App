import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ErrorBoundary from 'features/ErrorBoundary';

import { Header, Footer } from 'shared';
import SearchMovie from 'features/SearchMovie';
import MovieDetails from 'features/MovieDetails';

import styles from './style.scss';

const AppComponent = () => {
  return (
    <>
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
    </>
  );
};

export default AppComponent;
