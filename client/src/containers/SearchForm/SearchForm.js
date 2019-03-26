import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormComponent from './FormComponent';
import { Toggle, Navigation } from 'components/Common';

export default class SearchForm extends Component {
  render() {
    const {
      moviesCount,
      searchToggleValue,
      sortToggleValue,
      handleSubmit,
      handleToggle,
    } = this.props;
    return (
      <>
        <FormComponent
          handleSubmit={handleSubmit}
          handleToggle={handleToggle}
          searchToggleValue={searchToggleValue}
        />
        <Navigation>
          <span>{moviesCount + ' films are found'}</span>
          <Toggle
            labels={['Rating', 'Year']}
            type="sort"
            text="Sort by:"
            onChange={handleToggle}
            value={'rating' !== sortToggleValue}
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
  sortToggleValue: PropTypes.string.isRequired,
  searchToggleValue: PropTypes.string.isRequired,
};
