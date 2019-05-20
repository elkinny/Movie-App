import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MoviesListComponent from './component';
import { getMovies } from './utils.js';

class MoviesListContainer extends Component {
  state = {
    movies: [],
  };

  static propTypes = {
    genre: PropTypes.string.isRequired,
  };

  _getData = () => {
    if(this.props.genre) getMovies(this, { searchType:'genres', searchValue: this.props.genre });
      else getMovies(this);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.genre != this.props.genre){
      this._getData();
    }
  }

  componentDidMount() {
    this._getData();
  }

  render() {
    return <MoviesListComponent movies={this.state.movies} />;
  }
}

export default MoviesListContainer;
