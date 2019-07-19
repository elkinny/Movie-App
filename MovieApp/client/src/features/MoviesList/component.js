import React from 'react';

import MovieItem from 'features/MoviesListItem';

import styles from './style.scss';

//@flow

type Props = {
  movies: ?Array<string>,
};

const MoviesListComponent = (props: Props) => {
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

export default MoviesListComponent;
