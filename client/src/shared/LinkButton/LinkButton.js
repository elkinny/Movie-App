import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './link-button.scss';

const LinkButton = props => {
  const { to, cssClass, children } = props;
  return (
    <Link to={to} className={cssClass}>
      <span className={styles.link}>{children}</span>
    </Link>
  );
};

export default LinkButton;

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  cssClass: PropTypes.string,
};
