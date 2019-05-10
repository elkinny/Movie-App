import React from 'react';

import styles from './style.scss';

const NotFoundComponent = () => {
  return (
    <div className={styles['movie-item']}>
      <svg className={styles['svg']} viewBox="0 0 960 300">
        <symbol id="s-text">
          <text className={styles['text']} textAnchor="middle" x="50%" y="80%">
            404
          </text>
        </symbol>

        <g className={styles['g-ants']}>
          <use xlinkHref="#s-text" className={styles['text-copy']} />
          <use xlinkHref="#s-text" className={styles['text-copy']} />
          <use xlinkHref="#s-text" className={styles['text-copy']} />
          <use xlinkHref="#s-text" className={styles['text-copy']} />
          <use xlinkHref="#s-text" className={styles['text-copy']} />
        </g>
      </svg>
    </div>
  );
};

export default NotFoundComponent;
