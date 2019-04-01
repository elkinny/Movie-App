import React, { Component } from 'react';

import MovieDetailsComponent from './component';

import mockedData from 'core/data.json';

export default class MovieDetailsContainer extends Component {
  getMoviesByGenre = (data, genre) => {
    const moviesByGenre = [...data.movies].filter(el => {
      return el['genre'].toLowerCase().indexOf(genre.toLowerCase()) >= 0;
    });
    return moviesByGenre;
  };

  movieCardRef = el => {
    this.movieCard = el;
  };

  render() {
    const currentMovie = mockedData.movies[this.props.match.params.id - 1];
    window.scrollTo(0, this.movieCard);
    return (
      <MovieDetailsComponent
        currentMovie={currentMovie}
        movieCardRef={this.movieCardRef}
        moviesByGenre={this.getMoviesByGenre(mockedData, currentMovie.genre)}
      />
    );
  }
}
