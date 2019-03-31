import React, { Component } from 'react';

import MovieDetailsComponent from './MovieDetails.component';

import data from 'core/data.json';

export default class MovieDetailsContainer extends Component {
  getMoviesByGenre = genre => {
    const moviesByGenre = [...data.movies].filter(el => {
      return el['genre'].toLowerCase().indexOf(genre.toLowerCase()) >= 0;
    });
    return moviesByGenre;
  };

  movieCardRef = el => {
    this.movieCard = el;
  };

  render() {
    const currentMovie = data.movies[this.props.match.params.id - 1];
    window.scrollTo(0, this.movieCard);
    return (
      <MovieDetailsComponent
        currentMovie={currentMovie}
        movieCardRef={this.movieCardRef}
        getMoviesByGenre={this.getMoviesByGenre}
      />
    );
  }
}
