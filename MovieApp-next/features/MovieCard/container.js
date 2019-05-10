import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieCardComponent from './component';
import { getMovie } from './utils.js';

class MovieCardContainer extends Component {
  state = {
    movie: {},
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  _getData() {
    getMovie(this, this.props.id);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.id != this.props.id) this._getData();
  }

  componentDidMount() {
    this._getData();
  }

  render() {
    const { movie } = this.state;
    return <MovieCardComponent {...movie} />;
  }
}

export default MovieCardContainer;
