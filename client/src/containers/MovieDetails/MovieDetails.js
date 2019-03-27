import React, { Component } from 'react';

import MovieCard from './MovieCard/MovieCard';
import MoviesList from 'containers/MoviesList';
import { Navigation } from 'components/Common';

import data from 'data.json';

export default class MovieDetails extends Component {
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
      <>
        <MovieCard ref={this.movieCardRef} {...currentMovie} />
        <Navigation>
          <span>Films by {currentMovie.genre} genre</span>
        </Navigation>
        <MoviesList movies={this.getMoviesByGenre(currentMovie.genre)} />
      </>
    );
  }
}
