import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchMovieComponent from './component';

class SearchMovieContainer extends Component {
  static propTypes = {
    getMovies: PropTypes.func.isRequired,
    searchMovies: PropTypes.func.isRequired,
    sortMovies: PropTypes.func.isRequired,
    setSortBy: PropTypes.func.isRequired,
    setSearchBy: PropTypes.func.isRequired,

    movies: PropTypes.array.isRequired,

    sortBy: PropTypes.string.isRequired,
  };

  componentDidMount = () => {
    this.props.getMovies();
  };

  handleSubmit = (e, searchValue, searchType) => {
    e.preventDefault();
    if (searchValue.length > 3 || searchValue === '') {
      window.scrollTo(0, 0);
      this.props.setSearchBy({ searchType, searchValue });
      this.props.searchMovies(searchValue, searchType);
    }
  };

  handleInput = e => {
    this.props.setSortBy(e.target.value);
    this.props.sortMovies(e.target.value);
  };

  render() {
    const { movies, sortBy } = this.props;
    return (
      <SearchMovieComponent
        handleSubmit={this.handleSubmit}
        handleToggle={this.handleInput}
        moviesCount={movies.length}
        movies={movies}
        sortBy={sortBy}
      />
    );
  }
}

export default SearchMovieContainer;
