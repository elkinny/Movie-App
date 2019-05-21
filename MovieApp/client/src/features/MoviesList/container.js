import React, { Component } from 'react';

import MoviesListComponent from './component';

import { _formatedQuery } from './utils';

//@flow

type Props = {
  getMovies: ?(value: string) => mixed,
  getMoviesByGenre: ?(value: string) => mixed,
  sortMovies: ?(value: string) => mixed,
  movies: ?Array<string>,
  sortBy: ?mixed,
  currentMovieGenre: ?string,
};

class MoviesListContainer extends Component {
  props: Props;

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
