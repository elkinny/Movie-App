import React from 'react';

import MovieCard from 'features/MovieCard';
import MoviesList from 'features/MoviesList';
import { SubHeader } from 'shared';

const MovieDetailsComponent = props => {
  return (
    <>
      <MovieCard match={props.match} />
      <SubHeader>
        <span>Films by currentMovie.genres[0] genres</span>
      </SubHeader>
      <MoviesList />
    </>
  );
};

export default MovieDetailsComponent;
