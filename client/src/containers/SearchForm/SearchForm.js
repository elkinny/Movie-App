import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormComponent from './FormComponent';
import { Toggle, Navigation } from 'components/Common';

export default class SearchForm extends Component {
  render() {
    const {
      moviesCount,
      searchTypeValue,
      sortTypeValue,
      handleSubmit,
      handleToggle,
      searchMovie,
    } = this.props;
    return (
      <>
        <FormComponent
          searchMovie={searchMovie}
          handleSubmit={handleSubmit}
          handleToggle={handleToggle}
          sortTypeValue={searchTypeValue}
        />
        <Navigation>
          <span>{moviesCount + ' films are found'}</span>
          <Toggle
            labels={['Rating', 'Year']}
            type="sort"
            text="Sort by:"
            onChange={handleToggle}
            value={'rating' !== sortTypeValue}
          />
        </Navigation>
      </>
    );
  }
}

SearchForm.propTypes = {
  moviesCount: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  searchMovie: PropTypes.func.isRequired,
  sortTypeValue: PropTypes.string.isRequired,
  searchTypeValue: PropTypes.string.isRequired,
};
