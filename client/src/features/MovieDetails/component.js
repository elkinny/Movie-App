import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from 'features/MovieCard';
import MoviesList from 'features/MoviesList';
import { SubHeader } from 'shared';

const MovieDetailsComponent = props => {
  const { setMovieCardRef, currentMovie, moviesByGenre } = props;
  return (
    <>
      <MovieCard ref={setMovieCardRef} {...currentMovie} />
      <SubHeader>
        <span>Films by {currentMovie.genre} genre</span>
      </SubHeader>
      <MoviesList movies={moviesByGenre} />
    </>
  );
};

MovieDetailsComponent.propTypes = {
  setMovieCardRef: PropTypes.func.isRequired,
  currentMovie: PropTypes.object.isRequired,
  moviesByGenre: PropTypes.array.isRequired,
};

export default MovieDetailsComponent;
