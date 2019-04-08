import React from 'react';
import PropTypes from 'prop-types';

import { LinkButton } from 'shared';

import styles from './style.scss';

const MoviesListItemComponent = props => {
  const { title, overview, release_date, genres, id, poster_path } = props;

  return (
    <div className={styles['movie-item'] + ' movie-item--cy'}>
      <div className={styles['movie-item__header']}>
        <h2 className={styles['movie-item__title']}> {title} </h2>
        <span className={styles['movie-item__release_date']}> {release_date} </span>
      </div>
      <div className={styles['movie-item__body']}>
        <img className={styles['movie-item__img']} src={poster_path} height="400" />
        <span className={styles['movie-item__genres']}> {genres} </span>
        <p className={styles['movie-item__overview']}>{overview}</p>
        <LinkButton to={`/${id}/#`} cssClass="movie-item__link--cy">
          See more
        </LinkButton>
      </div>
    </div>
  );
};

MoviesListItemComponent.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
};

export default MoviesListItemComponent;
