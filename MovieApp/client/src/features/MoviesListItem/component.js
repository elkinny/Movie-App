import React from 'react';

import { LinkButton } from 'shared';

import styles from './style.scss';

//@flow

type Props = {
  title: ?string,
  overview: ?string,
  id: ?number,
  poster_path: ?string,
  release_date: ?string,
  genres: ?Array<string>,
};

const MoviesListItemComponent = (props: Props) => {
  const { title, overview, release_date, genres, id, poster_path } = props;

  return (
    <div className={styles['movie-item'] + ' movie-item--cy'}>
      <div className={styles['movie-item__header']}>
        <h2 className={styles['movie-item__title']}> {title} </h2>
        <span className={styles['movie-item__release-date']}> {release_date} </span>
      </div>
      <div className={styles['movie-item__body']}>
        <img className={styles['movie-item__img']} src={poster_path} height="400" />
        <span className={styles['movie-item__genres']}> {genres.join(', ')} </span>
        <p className={styles['movie-item__overview']}>{overview}</p>
        <LinkButton to={`/film/${id}`} cssClass="movie-item__link--cy">
          See more
        </LinkButton>
      </div>
    </div>
  );
};

export default MoviesListItemComponent;
