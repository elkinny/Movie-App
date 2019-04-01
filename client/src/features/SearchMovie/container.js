import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchMovieComponent from './component';

import mockedData from 'core/data.json';

export default class SearchMovieContainer extends Component {
  state = {
    searchValue: '',
    searchToggleValue: 'title',
  };

  static propTypes = {
    sortToggleValue: PropTypes.string.isRequired,
  };

  handleSubmit = (e, data) => {
    e.preventDefault();
    window.scrollTo(0, this.formComponent);
    this.setState({ searchValue: data.searchValue, searchToggleValue: data.searchToggleValue });
  };

  handleSeachToggleChange = e => {
    this.setState({ searchToggleValue: e.target.value });
  };

  getMovies = data => {
    const { sortToggleValue } = this.props;
    const { searchToggleValue, searchValue } = this.state;

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

  formComponentRef = el => {
    this.formComponent = el;
  };

  render() {
    const { searchToggleValue } = this.state;
    return (
      <SearchMovieComponent
        handleSubmit={this.handleSubmit}
        handleToggle={this.handleSeachToggleChange}
        moviesCount={this.getMovies(mockedData).length}
        movies={this.getMovies(mockedData)}
        searchToggleValue={searchToggleValue}
        formComponentRef={this.formComponentRef}
        {...this.props}
      />
    );
  }
}
