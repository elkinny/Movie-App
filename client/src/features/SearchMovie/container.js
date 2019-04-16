import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchMovieComponent from './component';

class SearchMovieContainer extends Component {
  static propTypes = {
    setSortBy: PropTypes.func.isRequired,
    setSearchBy: PropTypes.func.isRequired,
    moviesLength: PropTypes.number.isRequired,
    sortBy: PropTypes.string.isRequired,
  };

  handleToggle = e => {
    this.props.setSortBy(e.target.value);
  };

  render() {
    const { moviesLength, sortBy } = this.props;
    return (
      <SearchMovieComponent
        handleToggle={this.handleToggle}
        moviesCount={moviesLength}
        sortBy={sortBy}
      />
    );
  }
}

export default SearchMovieContainer;
