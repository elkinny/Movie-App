import React from 'react';
import PropTypes from 'prop-types';

import { LinkButton } from 'shared';

import styles from './style.scss';

const MovieCardComponent = props => {
  const { title, description, year, genre, picLink, rating, duration } = props;
  return (
    <>
      <div className={styles['movie-card']}>
        <div className={styles['movie-card__header']}>
          <img className={styles['movie-card__img']} src={picLink} height="400" />
        </div>
        <div className={styles['movie-card__body']}>
          <div className={styles['movie-card__line']}>
            <h2 className={styles['movie-card__title']}>
              {title}
              <span className={styles['movie-card__rating']}> {rating} </span>
            </h2>
          </div>
          <div className={styles['movie-card__subline']}>
            <span className={styles['movie-card__genre']}> {genre} </span>
            <span className={styles['movie-card__year']}> {year} </span>
            <span className={styles['movie-card__duration']}> {duration} </span>
          </div>
          <p className={styles['movie-card__description']}>{description}</p>
          <LinkButton
            to="/"
            cssClass={(styles['movie-card__link-back'] || '') + ' movie-card__link-back--cy'}
          >
            Back
          </LinkButton>
        </div>
      </div>
    </>
  );
};

MovieCardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picLink: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

export default MovieCardComponent;
