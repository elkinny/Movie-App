import React from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types';

import styles from './style.scss';

const LinkButton = props => {
  const { to, asValue, cssClass, children } = props;
  return (
    <Link href={to} as={asValue || 'url'} className={cssClass}>
      <span className={styles.link}>{children}</span>
    </Link>
  );
};

export default LinkButton;

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  cssClass: PropTypes.string,
  as: PropTypes.string,
};
