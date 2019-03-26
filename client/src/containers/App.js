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
    toggled_sortValue: 'rating',
    toggled_searchValue: 'title',
    searchValue: '',
    movies: data.movies,
  };

  handleInput = e => {
    this.setState({
      [`${e.target.name}Value`]: e.target.value,
    });
  };

  searchMovie = (e, data) => {
    e.preventDefault();
    console.log(e.value);
    this.setState({
      [`${e.target.name}Value`]: data,
    });
  };

  render() {
    const { toggled_searchValue, toggled_sortValue, searchValue } = this.state;
    let { movies } = data;
    movies = [...movies].sort((a, b) => {
      console.log(a, b, toggled_sortValue);
      return b[toggled_sortValue] - a[toggled_sortValue];
    });
    if (searchValue !== '') {
      movies = movies.filter(el => {
        return el[toggled_searchValue].toLowerCase().indexOf(searchValue.toLowerCase()) == 0;
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
                    movies={movies}
                    handleInput={this.handleInput}
                    searchMovie={this.searchMovie}
                    toggled_searchValue={toggled_searchValue}
                    toggled_sortValue={toggled_sortValue}
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
