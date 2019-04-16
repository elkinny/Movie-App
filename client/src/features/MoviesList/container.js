import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MoviesListComponent from './component';

class MoviesListContainer extends Component {
  static propTypes = {
    getMovies: PropTypes.func.isRequired,
    getMoviesByGenre: PropTypes.func.isRequired,
    sortMovies: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired,
    searchBy: PropTypes.object.isRequired,
    sortBy: PropTypes.object.isRequired,
    currentMovieGenre: PropTypes.string.isRequired,
  };

  componentDidMount() {
    this.props.getMovies();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.searchBy.searchValue !== prevProps.searchBy.searchValue ||
      this.props.searchBy.searchType !== prevProps.searchBy.searchType
    ) {
      this.props.getMovies();
      return;
    }
    if (
      this.props.sortBy.sortValue !== prevProps.sortBy.sortValue ||
      this.props.sortBy.sortType !== prevProps.sortBy.sortType
    ) {
      this.props.sortMovies();
      return;
    }
    if (this.props.currentMovieGenre !== prevProps.currentMovieGenre) {
      this.props.getMoviesByGenre();
      return;
    }
  }

  render() {
    return <MoviesListComponent movies={this.props.movies} />;
  }
}

export default MoviesListContainer;
