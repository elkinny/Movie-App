import React, { Component } from 'react';

import MovieDetailsComponent from './component';

import { getMoviesByGenre, getCurentMovie } from './utils.js';

class MovieDetailsContainer extends Component {
  state = {};

  static getDerivedStateFromProps(props, state) {
    window.scrollTo(0, 0);
    return state;
  }

  render() {
    const currentMovie = getCurentMovie(this.props.match.params.id - 1);
    return (
      <MovieDetailsComponent
        currentMovie={currentMovie}
        moviesByGenre={getMoviesByGenre(currentMovie.genre)}
      />
    );
  }
}

export default MovieDetailsContainer;
