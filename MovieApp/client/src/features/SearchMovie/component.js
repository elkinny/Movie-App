import React from 'react';

import MoviesList from 'features/MoviesList';

import SearchForm from 'features/SearchForm';
import { SubHeader, Toggle } from 'shared';

//@flow

type Props = {
  handleToggle: (value: mixed) => mixed,
  sortBy: string,
  moviesCount: number,
};

const SearchMovieComponent = (props: Props) => {
  const { sortBy, moviesCount, handleToggle } = props;

  return (
    <React.Fragment>
      <SearchForm />
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
      <MoviesList />
    </React.Fragment>
  );
};

export default SearchMovieComponent;
