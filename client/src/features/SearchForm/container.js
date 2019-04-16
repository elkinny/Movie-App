import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchFormComponent from './component';

class SearchFormContainer extends Component {
  state = { ...this.props.searchBy };

  static propTypes = {
    setSearchBy: PropTypes.func.isRequired,
    searchBy: PropTypes.object.isRequired,
  };

  handleSubmit = (e, searchValue, searchType) => {
    e.preventDefault();
    if (searchValue.length > 3 || searchValue === '') {
      window.scrollTo(0, 0);
      this.props.setSearchBy({ searchType, searchValue });
    }
  };

  handleInput = e => {
    this.setState({ [`${e.target.name}`]: e.target.value });
  };

  render() {
    const { searchValue, searchType } = this.state;
    return (
      <SearchFormComponent
        handleSubmit={this.handleSubmit}
        handleInput={this.handleInput}
        searchType={searchType}
        searchValue={searchValue}
      />
    );
  }
}

export default SearchFormContainer;
