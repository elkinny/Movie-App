import React from 'react';

import { Header, Footer } from '../../shared';

import styles from './style.scss';

const LayoutComponent = props => {
  const { children } = props;

  return (
    <>
      <Header />
      <main className={styles.container}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default LayoutComponent;
