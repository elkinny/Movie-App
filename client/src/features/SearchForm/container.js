import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import SearchFormComponent from './component';

class SearchFormContainer extends Component {
  state = { ...this.props.searchBy };

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    searchBy: PropTypes.object.isRequired,
  };

  handleInput = e => {
    this.setState({ [`${e.target.name}`]: e.target.value });
  };

  render() {
    const { handleSubmit } = this.props;
    const { searchValue, searchType } = this.state;
    return (
      <SearchFormComponent
        handleSubmit={handleSubmit}
        handleInput={this.handleInput}
        searchType={searchType}
        searchValue={searchValue}
      />
    );
  }
}

export default connect(state => ({
  searchBy: state.movieList.searchBy,
}))(SearchFormContainer);
