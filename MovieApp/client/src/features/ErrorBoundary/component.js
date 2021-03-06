import React from 'react';

import styles from './style.scss';

//@flow

type Props = {
  errorName: string,
  componentStack: string,
};

const ErrorBoundaryComponent = (props: Props) => {
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

export default ErrorBoundaryComponent;
