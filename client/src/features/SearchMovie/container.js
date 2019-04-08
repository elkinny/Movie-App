import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getMovies } from './actions';

import SearchMovieComponent from './component';

// import { getMovies } from './utils.js';

class SearchMovieContainer extends Component {
  state = {
    searchValue: '',
    searchToggleValue: 'title',
    sortToggleValue: 'vote_average',
  };

  componentDidMount = () => {
    this.props.getMovies();
  };

  handleSubmit = (e, searchValue, searchToggleValue) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    this.setState({ searchValue: searchValue, searchToggleValue: searchToggleValue });
  };

  handleInput = e => {
    this.setState({ [`${e.target.name}Value`]: e.target.value });
  };

  render() {
    const { searchToggleValue, sortToggleValue } = this.state;
    //const allMovies = getMovies(searchToggleValue, sortToggleValue, searchValue);
    const allMovies = this.props.movies;
    return (
      <SearchMovieComponent
        handleSubmit={this.handleSubmit}
        handleToggle={this.handleInput}
        moviesCount={allMovies.length}
        movies={allMovies}
        searchToggleValue={searchToggleValue}
        sortToggleValue={sortToggleValue}
      />
    );
  }
}

SearchMovieContainer.propTypes = {
  getMovies: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
};

export default connect(
  state => ({ movies: state.movies.movies }),
  { getMovies },
)(SearchMovieContainer);
