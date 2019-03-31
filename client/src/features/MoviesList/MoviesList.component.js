import React from 'react';
import PropTypes from 'prop-types';

import MovieItem from 'features/MovieListItem';

import styles from './movies-list.scss';

const MoviesListComponent = props => {
  const createList = () => {
    const { movies } = props;
    if (movies.length)
      return movies.map((movie, i) => <MovieItem {...movie} key={`${movie.title}_${i}`} />);
    else
      return (
        <span className={styles['movie-list__message']}> No movies that match your query </span>
      );
  };

  return <div className={styles['movie-list']}>{createList()}</div>;
};

MoviesListComponent.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesListComponent;
