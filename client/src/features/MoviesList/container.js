import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MoviesListComponent from './component';

import { _formatedQuery } from './utils';

class MoviesListContainer extends Component {
  static propTypes = {
    getMovies: PropTypes.func.isRequired,
    getMoviesByGenre: PropTypes.func.isRequired,
    sortMovies: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired,
    sortBy: PropTypes.object.isRequired,
    currentMovieGenre: PropTypes.string.isRequired,
  };

  static defaultProps = {
    currentMovieGenre: '',
  };

  _searchMovies(query) {
    const formatedQuery = _formatedQuery(query);
    this.props.getMovies({
      searchType: formatedQuery.type,
      searchValue: formatedQuery.value,
    });
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    if (this.props.match.params.query) {
      this._searchMovies(this.props.match.params.query);
      return;
    }
  }

  componentDidUpdate(prevProps) {
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
    if (this.props.match.params.query !== prevProps.match.params.query) {
      this._searchMovies(this.props.match.params.query);
      return;
    }
  }

  render() {
    return <MoviesListComponent movies={this.props.movies} />;
  }
}

export default MoviesListContainer;
