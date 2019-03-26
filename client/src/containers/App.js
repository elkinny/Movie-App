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
    sortToggleValue: 'rating',
    searchToggleValue: 'title',
    searchValue: '',
    movies: data.movies,
  };

  handleSubmit = (e, data) => {
    e.preventDefault();
    console.log(data);
    this.setState({ searchValue: data.searchValue, searchToggleValue: data.searchToggleValue });
  };

  handleToggle = e => {
    this.setState({ [`${e.target.name}Value`]: e.target.value });
  };

  render() {
    const { searchToggleValue, sortToggleValue, searchValue } = this.state;
    let { movies } = data;
    movies = [...movies].sort((a, b) => {
      return b[sortToggleValue] - a[sortToggleValue];
    });
    if (searchValue !== '') {
      movies = movies.filter(el => {
        return el[searchToggleValue].toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
      });
    }
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
                    moviesCount={movies.length}
                    handleSubmit={this.handleSubmit}
                    handleToggle={this.handleToggle}
                    searchToggleValue={searchToggleValue}
                    sortToggleValue={sortToggleValue}
                  />
                )}
              />
              <Route
                exact
                path="/:id"
                render={props => (
                  <MovieDetails movie={data.movies[props.match.params.id - 1]} {...props} />
                )}
              />
            </Switch>
            <MoviesList movies={movies} />
          </main>
          <Footer />
        </>
      </Router>
    );
  }
}
