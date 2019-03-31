import React from 'react';

import styles from './navigation.scss';

const Navigation = props => {
  return <div className={styles.navigation}>{props.children}</div>;
};

export default Navigation;
