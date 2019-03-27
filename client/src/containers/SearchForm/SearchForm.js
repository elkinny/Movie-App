import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MoviesList from 'containers/MoviesList';

import FormComponent from './FormComponent';
import { Toggle, Navigation } from 'components/Common';

import data from 'data.json';

export default class SearchForm extends Component {
  state = {
    searchToggleValue: 'title',
    searchValue: '',
  };

  handleSubmit = (e, data) => {
    e.preventDefault();
    console.log(data);
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

  render() {
    const { sortToggleValue, handleToggle } = this.props;
    const { searchToggleValue } = this.state;
    return (
      <>
        <FormComponent
          handleSubmit={this.handleSubmit}
          handleToggle={this.handleSeachToggleChange}
          searchToggleValue={searchToggleValue}
        />
        <Navigation>
          <span>{this.getMovies().length + ' films are found'}</span>
          <Toggle
            labels={['Rating', 'Year']}
            type="sort"
            text="Sort by:"
            onChange={handleToggle}
            value={'rating' !== sortToggleValue}
          />
        </Navigation>
        <MoviesList movies={this.getMovies()} />
      </>
    );
  }
}

SearchForm.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  sortToggleValue: PropTypes.string.isRequired,
};
