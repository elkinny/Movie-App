import React, { Component } from 'react';

import SearchMovieComponent from './component';

//@flow

type Props = {
  setSortBy: (value: string) => mixed,
  moviesLength: ?number,
  sortBy: ?string,
};

class SearchMovieContainer extends Component {
  props: Props;

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
