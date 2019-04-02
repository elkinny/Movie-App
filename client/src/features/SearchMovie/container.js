import React, { Component } from 'react';

import SearchMovieComponent from './component';

import { getMovies } from './utils.js';

class SearchMovieContainer extends Component {
  state = {
    searchValue: '',
    searchToggleValue: 'title',
    sortToggleValue: 'rating',
  };

  handleSubmit = (e, searchValue, searchToggleValue) => {
    e.preventDefault();
    window.scrollTo(0, this.formComponent);
    this.setState({ searchValue: searchValue, searchToggleValue: searchToggleValue });
  };

  handleInput = e => {
    this.setState({ [`${e.target.name}Value`]: e.target.value });
  };

  setFormComponentRef = el => {
    this.formComponent = el;
  };

  render() {
    const { searchToggleValue, sortToggleValue, searchValue } = this.state;
    const allMovies = getMovies(searchToggleValue, sortToggleValue, searchValue);
    return (
      <SearchMovieComponent
        handleSubmit={this.handleSubmit}
        handleToggle={this.handleInput}
        moviesCount={allMovies.length}
        movies={allMovies}
        searchToggleValue={searchToggleValue}
        setFormComponentRef={this.setFormComponentRef}
        sortToggleValue={sortToggleValue}
      />
    );
  }
}

export default SearchMovieContainer;
