import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { LinkButton } from 'components/Common';

import styles from './movie-item.scss';

export default class MovieItem extends Component {
  render() {
    const { title, description, year, genre, id, picLink } = this.props;

    return (
      <div className={styles['movie-item']}>
        <div className={styles['movie-item__header']}>
          <h2 className={styles['movie-item__title']}> {title} </h2>
          <span className={styles['movie-item__year']}> {year} </span>
        </div>
        <div className={styles['movie-item__body']}>
          <img className={styles['movie-item__img']} src={picLink} height="400" />
          <span className={styles['movie-item__genre']}> {genre} </span>
          <p className={styles['movie-item__description']}>{description}</p>
          <LinkButton to={`/about/${id}`} className={styles['movie-item__link']}>
            See more
          </LinkButton>
        </div>
      </div>
    );
  }
}

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  picLink: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
};
