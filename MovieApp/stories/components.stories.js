import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MovieCard from '../client/src/features/MovieCard/component';
import MoviesList from '../client/src/features/MoviesList/component';
import SearchForm from '../client/src/features/SearchForm/component';

import moviesList from './mocked-movies.json';

const handleSubmit = e => {
  e.preventDefault();
  action('clicked');
};

storiesOf('Components', module)
  .add('MovieCard', () => (
    <Router>
      <MovieCard {...moviesList.movies[0]} />
    </Router>
  ))
  .add('MovieList', () => (
    <Router>
      <MoviesList movies={moviesList.movies} />
    </Router>
  ))
  .add('Empty MovieList', () => (
    <Router>
      <MoviesList movies={[]} />
    </Router>
  ))
  .add('Search', () => (
    <Router>
      <SearchForm
        handleSubmit={handleSubmit}
        handleInput={() => {}}
        searchType={'searchType'}
        searchValue={''}
      />
    </Router>
  ));
