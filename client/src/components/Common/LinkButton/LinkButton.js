import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './link-button.scss';

const LinkButton = props => {
  return (
    <Link to={props.to}>
      <span className={styles.link}>{props.children}</span>
    </Link>
  );
};

export default LinkButton;

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
};
