import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from 'features/MovieCard';
import MoviesList from 'features/MoviesList';
import { SubHeader } from 'shared';

const MovieDetailsComponent = props => {
  const { currentMovie, moviesByGenre } = props;
  return (
    <>
      <MovieCard {...currentMovie} />
      <SubHeader>
        <span>Films by {currentMovie.genre} genre</span>
      </SubHeader>
      <MoviesList movies={moviesByGenre} />
    </>
  );
};

MovieDetailsComponent.propTypes = {
  currentMovie: PropTypes.object.isRequired,
  moviesByGenre: PropTypes.array.isRequired,
};

export default MovieDetailsComponent;
