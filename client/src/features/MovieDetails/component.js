import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from 'features/MovieCard';
import MoviesList from 'features/MoviesList';
import { SubHeader } from 'shared';

const MovieDetailsComponent = props => {
  const { currentMovie, moviesByGenres } = props;
  return (
    <>
      <MovieCard {...currentMovie} />
      <SubHeader>
        <span>Films by {currentMovie.genres.join(', ')} genres</span>
      </SubHeader>
      <MoviesList movies={moviesByGenres} />
    </>
  );
};

MovieDetailsComponent.propTypes = {
  currentMovie: PropTypes.object.isRequired,
  moviesByGenres: PropTypes.array.isRequired,
};

export default MovieDetailsComponent;
