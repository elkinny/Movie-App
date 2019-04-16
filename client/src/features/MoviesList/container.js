import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MoviesListComponent from './component';

class MoviesListContainer extends Component {
  static propTypes = {
    getMovies: PropTypes.func.isRequired,
    sortMovies: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired,
    searchBy: PropTypes.object.isRequired,
    sortBy: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.searchBy.searchValue !== prevProps.searchBy.searchValue ||
      this.props.searchBy.searchType !== prevProps.searchBy.searchType
    )
      this.props.getMovies();
    if (
      this.props.sortBy.sortValue !== prevProps.sortBy.sortValue ||
      this.props.sortBy.sortType !== prevProps.sortBy.sortType
    )
      this.props.sortMovies();
  }

  render() {
    return <MoviesListComponent movies={this.props.movies} />;
  }
}

export default MoviesListContainer;
