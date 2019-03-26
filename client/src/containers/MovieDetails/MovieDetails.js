import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard/MovieCard';
import { Navigation } from 'components/Common';

export default class MovieDetails extends Component {
  render() {
    const currentMovie = this.props.movie;
    return (
      <>
        <MovieCard {...currentMovie} />
        <Navigation>
          <span>Films by {currentMovie.genre} genre</span>
        </Navigation>
      </>
    );
  }
}

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
};
