//movieList
export const allMoviesSelector = state => state.allMovies.movies;
export const moviesLengthSelector = state => state.allMovies.length;

export const sortBySelector = state => state.formatParams.sortBy;
export const sortValueSelector = state => sortBySelector(state).sortValue;
export const sortTypeSelector = state => sortBySelector(state).sortType;

// currentMovie
export const movieSelector = state => state.currentMovie.movie;
export const currentMovieGenreSelector = state => state.currentMovie.movie.genres[0];
