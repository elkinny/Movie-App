import React, { Component } from 'react';

import { Header, Footer } from 'components/Common';
// import MoviesList from 'containers/MoviesList';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SearchForm from 'containers/SearchForm';
import MovieDetails from 'containers/MovieDetails';
import MoviesList from 'containers/MoviesList';

import styles from './app.scss';
import data from 'data.json';

export default class App extends Component {
  state = {
    toggled_filterValue: 'rating',
    toggled_searchValue: 'title',
    searchValue: '',
    movies: data.movies,
  };

  handleInput = e => {
    this.setState({
      [`${e.target.name}Value`]: e.target.value,
    });
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
                  <SearchForm movies={this.state.movies} handleInput={this.handleInput} />
                )}
              />
              <Route
                exact
                path="/about/:id"
                render={props => (
                  <MovieDetails movie={this.state.movies[props.match.params.id - 1]} {...props} />
                )}
              />
            </Switch>
            <MoviesList movies={this.state.movies} />
          </main>
          <Footer />
        </>
      </Router>
    );
  }
}
