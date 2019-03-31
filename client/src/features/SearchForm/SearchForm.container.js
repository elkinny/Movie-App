import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchFormComponent from './SearchForm.component';

export default class SearchFormContainer extends Component {
  state = {
    searchValue: '',
    searchToggleValue: this.props.searchToggleValue,
  };

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    searchToggleValue: PropTypes.string.isRequired,
  };

  handleInput = e => {
    this.setState({ [`${e.target.name}Value`]: e.target.value });
  };

  render() {
    return (
      <SearchFormComponent
        handleSubmit={this.props.handleSubmit}
        handleInput={this.handleInput}
        searchToggleValue={this.props.searchToggleValue}
        state={this.state}
      />
    );
  }
}
