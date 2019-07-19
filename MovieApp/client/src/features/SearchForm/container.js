import React, { Component } from 'react';

import SearchFormComponent from './component';

import { formatedQuery as _formatedQuery } from './utils';

//@flow

type Props = {
  history: mixed,
};

class SearchFormContainer extends Component {
  props: Props;

  constructor(props) {
    super();
    const formatedQuery = _formatedQuery(props.match.params.query) || { value: '', type: 'title' };
    this.state = {
      searchValue: formatedQuery.value,
      searchType: formatedQuery.type,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchValue.length > 3) {
      this.props.history.push(
        `/search/value=${this.state.searchValue}&type=${this.state.searchType}`,
      );
    } else alert('Type more than 3 symbols, please');
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
