import React from 'react';
import PropTypes from 'prop-types';

import { LinkButton } from 'shared';

import styles from './style.scss';

const MoviesListItemComponent = props => {
  const { title, description, year, genre, id, picLink } = props;

  return (
    <div className={styles['movie-item'] + ' movie-item--cy'}>
      <div className={styles['movie-item__header']}>
        <h2 className={styles['movie-item__title']}> {title} </h2>
        <span className={styles['movie-item__year']}> {year} </span>
      </div>
      <div className={styles['movie-item__body']}>
        <img className={styles['movie-item__img']} src={picLink} height="400" />
        <span className={styles['movie-item__genre']}> {genre} </span>
        <p className={styles['movie-item__description']}>{description}</p>
        <LinkButton
          to={`/${id}/#`}
          cssClass={(styles['movie-item__link'] || '') + 'movie-item__link--cy'}
        >
          See more
        </LinkButton>
      </div>
    </div>
  );
};

MoviesListItemComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  picLink: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
};

export default MoviesListItemComponent;
