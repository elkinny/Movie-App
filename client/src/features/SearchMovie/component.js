import React from 'react';
import PropTypes from 'prop-types';

import MoviesList from 'features/MoviesList';

import SearchForm from 'features/SearchForm';
import { SubHeader, Toggle } from 'shared';

const SearchMovieComponent = props => {
  const {
    sortToggleValue,
    moviesCount,
    searchToggleValue,
    handleSubmit,
    handleToggle,
    movies,
  } = props;

  return (
    <>
      <SearchForm
        handleSubmit={handleSubmit}
        handleToggle={handleToggle}
        searchToggleValue={searchToggleValue}
      />
      <SubHeader>
        <span>{moviesCount + ' films are found'}</span>
        <Toggle
          labels={['Rate', 'Date']}
          type="sort"
          text="Sort by:"
          onChange={handleToggle}
          value={'vote_average' !== sortToggleValue}
        />
      </SubHeader>
      <MoviesList movies={movies} />
    </>
  );
};

SearchMovieComponent.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  sortToggleValue: PropTypes.string.isRequired,
  moviesCount: PropTypes.number.isRequired,
  searchToggleValue: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
};

export default SearchMovieComponent;
