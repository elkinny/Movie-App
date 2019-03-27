import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

  render() {
    const currentMovie = data.movies[this.props.match.params.id - 1];
    return (
      <>
        <MovieCard {...currentMovie} />
        <Navigation>
          <span>Films by {currentMovie.genre} genre</span>
        </Navigation>
        <MoviesList movies={this.getMoviesByGenre(currentMovie.genre)} />
      </>
    );
  }
}

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
};
