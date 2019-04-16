import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from 'features/MovieCard';
import MoviesList from 'features/MoviesList';
import { SubHeader } from 'shared';

const MovieDetailsComponent = props => {
  const { currentMovie } = props;
  return (
    <>
      <MovieCard {...currentMovie} />
      <SubHeader>
        <span>Films by {currentMovie.genres[0]} genres</span>
      </SubHeader>
      <MoviesList />
    </>
  );
};

MovieDetailsComponent.propTypes = {
  currentMovie: PropTypes.object.isRequired,
};

export default MovieDetailsComponent;
