import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormComponent from './FormComponent';
import { Toggle, Navigation } from 'components/Common';

export default class SearchForm extends Component {
  render() {
    return (
      <>
        <FormComponent
          onSubmit={this.props.searchMovie}
          handleInput={this.props.handleInput}
          toggled_filterValue={this.props.toggled_searchValue}
        />
        <Navigation>
          <span>10 films are found</span>
          <Toggle
            labels={['Rating', 'Date']}
            type="filter"
            text="Filter by:"
            onChange={this.props.handleInput}
            value={'Rating' === this.props.toggled_filterValue}
          />
        </Navigation>
      </>
    );
  }
}

SearchForm.propTypes = {
  movies: PropTypes.array.isRequired,
  handleInput: PropTypes.func.isRequired,
  searchMovie: PropTypes.func.isRequired,
  toggled_filterValue: PropTypes.string.isRequired,
  toggled_searchValue: PropTypes.string.isRequired,
};
