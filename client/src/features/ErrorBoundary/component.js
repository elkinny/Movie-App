import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

const ErrorBoundaryComponent = props => {
  const { errorName, componentStack } = props;
  const formattedComponentStack = (componentStack + '').trim().split('\n');

  return (
    <div className={styles['error']}>
      <h1 className={styles['error__title']}>Oops! An error occured!</h1>
      <h2 className={styles['error__subtitle']}>Here’s what we know…</h2>
      <p className={styles['error__name']}>
        <span className={styles['error__label']}>Error:</span>
        <span>{errorName}</span>
      </p>
      <article className={styles['error__stacktrace']}>
        <h3 className={styles['error__label']}>Stacktrace:</h3>
        {formattedComponentStack.map((el, i) => (
          <p key={'trace' + i} className={styles['error__stacktrace-item']}>
            {el}
          </p>
        ))}
      </article>
    </div>
  );
};

ErrorBoundaryComponent.propTypes = {
  errorName: PropTypes.string,
  componentStack: PropTypes.string,
};

export default ErrorBoundaryComponent;
