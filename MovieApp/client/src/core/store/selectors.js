import { createSelector } from 'reselect';

const getAllMovies = state => state.allMovies;

//movieList
export const allMoviesSelector = createSelector(
  getAllMovies,
  allMovies => allMovies.movies,
);
export const moviesLengthSelector = createSelector(
  getAllMovies,
  allMovies => allMovies.length,
);

const sortBy = state => state.formatParams.sortBy;

export const sortBySelector = createSelector(
  sortBy,
  sortBy => sortBy,
);
export const sortValueSelector = createSelector(
  sortBy,
  sortBy => sortBy.sortValue,
);
export const sortTypeSelector = createSelector(
  sortBy,
  sortBy => sortBy.sortType,
);

// currentMovie
const movie = state => state.currentMovie.movie;

export const movieSelector = createSelector(
  movie,
  movie => movie,
);
export const currentMovieGenreSelector = createSelector(
  movie,
  movie => movie.genres[0],
);
