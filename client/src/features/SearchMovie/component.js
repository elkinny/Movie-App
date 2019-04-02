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
    setFormComponentRef,
    movies,
  } = props;

  return (
    <>
      <SearchForm
        ref={setFormComponentRef}
        handleSubmit={handleSubmit}
        handleToggle={handleToggle}
        searchToggleValue={searchToggleValue}
      />
      <SubHeader>
        <span>{moviesCount + ' films are found'}</span>
        <Toggle
          labels={['Rating', 'Year']}
          type="sort"
          text="Sort by:"
          onChange={handleToggle}
          value={'rating' !== sortToggleValue}
        />
      </SubHeader>
      <MoviesList movies={movies} />
    </>
  );
};

SearchMovieComponent.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  setFormComponentRef: PropTypes.func.isRequired,
  sortToggleValue: PropTypes.string.isRequired,
  moviesCount: PropTypes.number.isRequired,
  searchToggleValue: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
};

export default SearchMovieComponent;
