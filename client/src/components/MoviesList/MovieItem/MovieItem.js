import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './movie-item.scss';

export default class MovieItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, description, link, picLink } = this.props;

    return (
      <div className="movie-item">
        <h2 className="movie-item__title"> {title} </h2>
        <img className="movie-item__img" src={picLink} height="400" />
        <p className="movie-item__description">{description}</p>
        <a className="movie-item__link" href={link} rel="noopener noreferrer">
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
