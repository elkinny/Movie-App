import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchMovieComponent from './SearchMovie.component';

import data from 'core/data.json';

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
    this.setState({ searchValue: data.searchValue, searchToggleValue: data.searchToggleValue });
  };

  handleSeachToggleChange = e => {
    this.setState({ searchToggleValue: e.target.value });
  };

  getMovies = () => {
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
    window.scrollTo(0, this.formComponent);
    return (
      <SearchMovieComponent
        handleSubmit={this.handleSubmit}
        handleToggle={this.handleSeachToggleChange}
        moviesCount={this.getMovies().length}
        movies={this.getMovies()}
        searchToggleValue={this.state.searchToggleValue}
        formComponentRef={this.formComponentRef}
        {...this.props}
      />
    );
  }
}
