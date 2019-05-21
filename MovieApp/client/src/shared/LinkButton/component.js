import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.scss';

//@flow

type Props = {
  to: ?string,
  cssClass: string,
};

const LinkButton = (props: Props) => {
  const { to, cssClass, children } = props;
  return (
    <Link to={to} className={cssClass}>
      <span className={styles.link}>{children}</span>
    </Link>
  );
};

export default LinkButton;
