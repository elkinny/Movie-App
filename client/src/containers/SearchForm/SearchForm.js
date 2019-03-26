import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormComponent from './FormComponent';
import { Toggle, Navigation } from 'components/Common';

export default class SearchForm extends Component {
  render() {
    return (
      <>
        <FormComponent
          searchMovie={this.props.searchMovie}
          handleInput={this.props.handleInput}
          toggled_sortValue={this.props.toggled_searchValue}
          toggled_searchValue={this.props.toggled_searchValue}
        />
        <Navigation>
          <span>10 films are found</span>
          <Toggle
            labels={['Rating', 'Year']}
            type="sort"
            text="Sort by:"
            onChange={this.props.handleInput}
            value={'rating' !== this.props.toggled_sortValue}
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
  toggled_sortValue: PropTypes.string.isRequired,
  toggled_searchValue: PropTypes.string.isRequired,
};
