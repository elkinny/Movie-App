import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormComponent from 'components/FormComponent';
import { Toggle, Navigation } from 'components/Common';

export default class SearchForm extends Component {
  render() {
    return (
      <>
        <FormComponent
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            name="search"
            placeholder="Search..."
            onChange={this.props.handleInput}
          />
          <input type="submit" value="Search" />
          <Toggle
            labels={['Genre', 'Title']}
            type="search"
            text="Search by:"
            onChange={this.props.handleInput}
          />
        </FormComponent>
        <Navigation>
          <span>10 films are found</span>
          <Toggle
            labels={['Date', 'Rating']}
            type="filter"
            text="Filter by:"
            onChange={this.props.handleInput}
          />
        </Navigation>
      </>
    );
  }
}

SearchForm.propTypes = {
  movies: PropTypes.array.isRequired,
  handleInput: PropTypes.func.isRequired,
};
