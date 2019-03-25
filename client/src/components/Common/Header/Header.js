import React from 'react';
import { Link } from 'react-router-dom';

import styles from './header.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <span className={styles.title}>Movie app</span>
      </Link>
    </header>
  );
};

export default Header;
