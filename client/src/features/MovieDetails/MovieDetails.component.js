import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from 'features/MovieCard';
import MoviesList from 'features/MoviesList';
import { Navigation } from 'shared';

const MovieDetailsComponent = props => {
  return (
    <>
      <MovieCard ref={props.movieCardRef} {...props.currentMovie} />
      <Navigation>
        <span>Films by {props.currentMovie.genre} genre</span>
      </Navigation>
      <MoviesList movies={props.getMoviesByGenre(props.currentMovie.genre)} />
    </>
  );
};

MovieDetailsComponent.propTypes = {
  movieCardRef: PropTypes.func.isRequired,
  currentMovie: PropTypes.array.isRequired,
  getMoviesByGenre: PropTypes.func.isRequired,
};

export default MovieDetailsComponent;
