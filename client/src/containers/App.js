import React, { Component } from 'react';

import { Header, Footer } from 'components/Common';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SearchForm from 'containers/SearchForm';
import MovieDetails from 'containers/MovieDetails';

import styles from './app.scss';

export default class App extends Component {
  state = {
    sortToggleValue: 'rating',
  };

  handleInput = e => {
    this.setState({ [`${e.target.name}Value`]: e.target.value });
  };

  render() {
    return (
      <Router>
        <>
          <Header />
          <main className={styles.container}>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <SearchForm
                    sortToggleValue={this.state.sortToggleValue}
                    handleToggle={this.handleInput}
                  />
                )}
              />
              <Route exact path="/:id" component={MovieDetails} />
            </Switch>
          </main>
          <Footer />
        </>
      </Router>
    );
  }
}
