import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchFormComponent from './component';

class SearchFormContainer extends Component {
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
    const { handleSubmit } = this.props;
    const { searchValue, searchToggleValue } = this.state;
    return (
      <SearchFormComponent
        handleSubmit={handleSubmit}
        handleInput={this.handleInput}
        searchToggleValue={searchToggleValue}
        searchValue={searchValue}
      />
    );
  }
}

export default SearchFormContainer;
