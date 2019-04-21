import React, { Component } from 'react';

import SearchFormComponent from './component';

import { formatedQuery as _formatedQuery } from './utils';
class SearchFormContainer extends Component {
  constructor(props) {
    super();
    const formatedQuery = _formatedQuery(props.match.params.query) || { value: '', type: 'title' };
    this.state = {
      searchValue: formatedQuery.value,
      searchType: formatedQuery.type,
    };
  }

  handleInput = e => {
    this.setState({ [`${e.target.name}`]: e.target.value });
  };

  render() {
    const { searchValue, searchType } = this.state;
    return (
      <SearchFormComponent
        handleInput={this.handleInput}
        searchType={searchType}
        searchValue={searchValue}
      />
    );
  }
}

export default SearchFormContainer;
