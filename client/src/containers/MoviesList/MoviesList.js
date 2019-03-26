import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieItem from './MovieItem/MovieItem';

import styles from './movies-list.scss';

export default class MoviesList extends Component {
  createList() {
    const { movies } = this.props;
    if (movies.length)
      return movies.map((movie, i) => <MovieItem {...movie} key={`${movie.title}_${i}`} />);
    else
      return (
        <span className={styles['movie-list__message']}> No movies that match your query </span>
      );
  }

  render() {
    return <div className={styles['movie-list']}>{this.createList()}</div>;
  }
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
