import React from 'react';
import PropTypes from 'prop-types';

import MoviesList from 'features/MoviesList';

import SearchForm from 'features/SearchForm';
import { Navigation, Toggle } from 'shared';

const SearchMovieComponent = props => {
  const {
    sortToggleValue,
    moviesCount,
    searchToggleValue,
    handleSubmit,
    handleToggle,
    formComponentRef,
    movies,
  } = props;

  return (
    <>
      <SearchForm
        ref={formComponentRef}
        handleSubmit={handleSubmit}
        handleToggle={handleToggle}
        searchToggleValue={searchToggleValue}
      />
      <Navigation>
        <span>{moviesCount + ' films are found'}</span>
        <Toggle
          labels={['Rating', 'Year']}
          type="sort"
          text="Sort by:"
          onChange={handleToggle}
          value={'rating' !== sortToggleValue}
        />
      </Navigation>
      <MoviesList movies={movies} />
    </>
  );
};

SearchMovieComponent.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formComponentRef: PropTypes.func.isRequired,
  sortToggleValue: PropTypes.string.isRequired,
  moviesCount: PropTypes.number.isRequired,
  searchToggleValue: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
};

export default SearchMovieComponent;
