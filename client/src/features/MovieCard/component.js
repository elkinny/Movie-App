import React from 'react';
import PropTypes from 'prop-types';

import { LinkButton } from 'shared';

import styles from './style.scss';

const MovieCardComponent = props => {
  const { title, overview, release_date, genres, poster_path, vote_average, runtime } = props;
  return (
    <>
      <div className={styles['movie-card']}>
        <div className={styles['movie-card__header']}>
          <img className={styles['movie-card__img']} src={poster_path} height="400" />
        </div>
        <div className={styles['movie-card__body']}>
          <div className={styles['movie-card__line']}>
            <h2 className={styles['movie-card__title']}>
              {title}
              <span className={styles['movie-card__vote_average']}> {vote_average} </span>
            </h2>
          </div>
          <div className={styles['movie-card__subline']}>
            <span className={styles['movie-card__genres']}>{genres.join(', ')}</span>
            <span className={styles['movie-card__release_date']}> {release_date} </span>
            {runtime && <span className={styles['movie-card__runtime']}> {runtime}min </span>}
          </div>
          <p className={styles['movie-card__overview']}>{overview}</p>
          <LinkButton to="/" cssClass="movie-card__link-back--cy">
            Back
          </LinkButton>
        </div>
      </div>
    </>
  );
};

MovieCardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  vote_average: PropTypes.number.isRequired,
  runtime: PropTypes.number,
};

export default MovieCardComponent;
