import React, { Component } from 'react';

import MovieDetailsComponent from './component';

import { getmoviesByGenres, getCurentMovie } from './utils.js';

class MovieDetailsContainer extends Component {
  state = {};

  static getDerivedStateFromProps(props, state) {
    window.scrollTo(0, 0);
    return state;
  }

  render() {
    return (
      <MovieDetailsComponent currentMovie={getCurentMovie()} moviesByGenres={getmoviesByGenres()} />
    );
  }
}

export default MovieDetailsContainer;
