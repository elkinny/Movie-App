import React from 'react';
import PropTypes from 'prop-types';

import MoviesList from 'features/MoviesList';

import SearchForm from 'features/SearchForm';
import { SubHeader, Toggle } from 'shared';

const SearchMovieComponent = props => {
  const { sortBy, moviesCount, handleSubmit, handleToggle, movies } = props;

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} handleToggle={handleToggle} />
      <SubHeader>
        <span>{moviesCount + ' films are found'}</span>
        <Toggle
          labels={['Rate', 'Date']}
          values={['vote_average', 'release_date']}
          name="sortValue"
          text="Sort by:"
          onChange={handleToggle}
          defaultValue={'vote_average' !== sortBy}
        />
      </SubHeader>
      <MoviesList movies={movies} />
    </>
  );
};

SearchMovieComponent.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
  moviesCount: PropTypes.number.isRequired,
  movies: PropTypes.array.isRequired,
};

export default SearchMovieComponent;
