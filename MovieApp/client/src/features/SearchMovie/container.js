import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchMovieComponent from './component';

class SearchMovieContainer extends Component {
  static propTypes = {
    setSortBy: PropTypes.func.isRequired,
    moviesLength: PropTypes.number.isRequired,
    sortBy: PropTypes.string.isRequired,
  };

  static defaultProps = {
    moviesLength: 0,
  };

  handleToggle = e => {
    this.props.setSortBy(e.target.value);
  };

  render() {
    const { moviesLength, sortBy } = this.props;
    return (
      <SearchMovieComponent
        handleToggle={this.handleToggle}
        moviesCount={moviesLength || 0}
        sortBy={sortBy}
      />
    );
  }
}

export default SearchMovieContainer;
