import React, { Component } from 'react';

import SearchMovieComponent from './component';

import mockedData from 'core/data.json';

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

  getMovies = data => {
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
    return movies;
  };

  setFormComponentRef = el => {
    this.formComponent = el;
  };

  render() {
    const { searchToggleValue, sortToggleValue } = this.state;
    return (
      <SearchMovieComponent
        handleSubmit={this.handleSubmit}
        handleToggle={this.handleInput}
        moviesCount={this.getMovies(mockedData).length}
        movies={this.getMovies(mockedData)}
        searchToggleValue={searchToggleValue}
        setFormComponentRef={this.setFormComponentRef}
        sortToggleValue={sortToggleValue}
      />
    );
  }
}

export default SearchMovieContainer;
