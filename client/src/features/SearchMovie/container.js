import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getMovies, searchMovies, sortMovies, setSortBy, setSearchBy } from './actions';

import SearchMovieComponent from './component';

class SearchMovieContainer extends Component {
  componentDidMount = () => {
    this.props.getMovies(this.props.sortBy);
  };

  handleSubmit = (e, searchValue, searchType) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    this.props.setSearchBy({ searchType, searchValue });
    this.props.searchMovies(searchValue, searchType, this.props.sortBy);
  };

  handleInput = e => {
    this.props.setSortBy(e.target.value);
    this.props.sortMovies(e.target.value);
  };

  render() {
    const { movies, sortBy, searchBy } = this.props;
    return (
      <SearchMovieComponent
        handleSubmit={this.handleSubmit}
        handleToggle={this.handleInput}
        moviesCount={movies.length}
        movies={movies}
        searchToggleValue={searchBy.searchType}
        sortBy={sortBy}
      />
    );
  }
}

SearchMovieContainer.propTypes = {
  getMovies: PropTypes.func.isRequired,
  searchMovies: PropTypes.func.isRequired,
  sortMovies: PropTypes.func.isRequired,
  setSortBy: PropTypes.func.isRequired,
  setSearchBy: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  sortBy: PropTypes.string.isRequired,
  searchBy: PropTypes.object.isRequired,
};

export default connect(
  state => ({
    movies: state.movieList.movies,
    sortBy: state.movieList.sortBy.sortValue,
    searchBy: state.movieList.searchBy,
  }),
  { getMovies, searchMovies, sortMovies, setSortBy, setSearchBy },
)(SearchMovieContainer);
