import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import ErrorBoundary from 'features/ErrorBoundary';

import { Header, Footer } from 'shared';
import SearchMovie from 'features/SearchMovie';
import MovieDetails from 'features/MovieDetails';

import styles from './style.scss';

const AppComponent = props => {
  return (
    <Router>
      <>
        <Header />
        <main className={styles.container}>
          <ErrorBoundary>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <SearchMovie
                    sortToggleValue={props.sortToggleValue}
                    handleToggle={props.handleToggle}
                  />
                )}
              />
              <Route exact path="/:id" component={MovieDetails} />
            </Switch>
          </ErrorBoundary>
        </main>
        <Footer />
      </>
    </Router>
  );
};

AppComponent.propTypes = {
  sortToggleValue: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default AppComponent;
