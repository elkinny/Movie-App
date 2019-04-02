import React, { Component } from 'react';

import MovieDetailsComponent from './component';

import mockedData from 'core/data.json';

class MovieDetailsContainer extends Component {
  getMoviesByGenre = (data, genre) => {
    const moviesByGenre = [...data.movies].filter(el => {
      return el['genre'].toLowerCase().indexOf(genre.toLowerCase()) >= 0;
    });
    return moviesByGenre;
  };

  setMovieCardRef = el => {
    this.movieCard = el;
  };

  getCurentMovie() {
    return mockedData.movies[this.props.match.params.id - 1];
  }

  render() {
    const currentMovie = this.getCurentMovie();
    window.scrollTo(0, this.movieCard);
    return (
      <MovieDetailsComponent
        currentMovie={currentMovie}
        setMovieCardRef={this.setMovieCardRef}
        moviesByGenre={this.getMoviesByGenre(mockedData, currentMovie.genre)}
      />
    );
  }
}

export default MovieDetailsContainer;
