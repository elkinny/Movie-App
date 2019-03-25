import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './movie-item.scss';

export default class MovieItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, description, link, picLink } = this.props;

    return (
      <div className={styles['movie-item']}>
        <h2 className={styles['movie-item__title']}> {title} </h2>
        <img className={styles['movie-item__img']} src={picLink} height="400" />
        <p className={styles['movie-item__description']}>{description}</p>
        <a className={styles['movie-item__link']} href={link} rel="noopener noreferrer">
          Watch trailer
        </a>
      </div>
    );
  }
}

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  picLink: PropTypes.string.isRequired,
};
