import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from 'features/MovieCard';
import MoviesList from 'features/MoviesList';
import { Navigation } from 'shared';

const MovieDetailsComponent = props => {
  const { movieCardRef, currentMovie, moviesByGenre } = props;
  return (
    <>
      <MovieCard ref={movieCardRef} {...currentMovie} />
      <Navigation>
        <span>Films by {currentMovie.genre} genre</span>
      </Navigation>
      <MoviesList movies={moviesByGenre} />
    </>
  );
};

MovieDetailsComponent.propTypes = {
  movieCardRef: PropTypes.func.isRequired,
  currentMovie: PropTypes.object.isRequired,
  moviesByGenre: PropTypes.array.isRequired,
};

export default MovieDetailsComponent;
