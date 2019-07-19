import React from 'react';

import { LinkButton } from 'shared';

import styles from './style.scss';

//@flow

type Props = {
  title: ?string,
  overview: ?string,
  poster_path: ?string,
  release_date: ?string,
  genres: ?Array<string>,
  vote_average: ?number,
  runtime: number,
};

const MovieCardComponent = (props: Props) => {
  const { title, overview, release_date, genres, poster_path, vote_average, runtime } = props;
  return (
    <React.Fragment>
      <div className={styles['movie-card']}>
        <div className={styles['movie-card__header']}>
          <img className={styles['movie-card__img']} src={poster_path} height="400" />
        </div>
        <div className={styles['movie-card__body']}>
          <div className={styles['movie-card__line']}>
            <h2 className={styles['movie-card__title']}>
              {title}
              <span className={styles['movie-card__vote_average']}> {vote_average} </span>
            </h2>
          </div>
          <div className={styles['movie-card__subline']}>
            <span className={styles['movie-card__genres']}>{genres.join(', ')}</span>
            <span className={styles['movie-card__release_date']}> {release_date} </span>
            {runtime && <span className={styles['movie-card__runtime']}> {runtime}min </span>}
          </div>
          <p className={styles['movie-card__overview']}>{overview}</p>
          <LinkButton to="/" cssClass="movie-card__link-back--cy">
            Back
          </LinkButton>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieCardComponent;
