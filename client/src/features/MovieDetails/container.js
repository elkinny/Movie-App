import React, { Component } from 'react';

import MovieDetailsComponent from './component';

import { getMoviesByGenre, getCurentMovie } from './utils.js';

class MovieDetailsContainer extends Component {
  setMovieCardRef = el => {
    this.movieCard = el;
  };

  render() {
    const currentMovie = getCurentMovie(this.props.match.params.id - 1);
    window.scrollTo(0, this.movieCard);
    return (
      <MovieDetailsComponent
        currentMovie={currentMovie}
        setMovieCardRef={this.setMovieCardRef}
        moviesByGenre={getMoviesByGenre(currentMovie.genre)}
      />
    );
  }
}

export default MovieDetailsContainer;
