//movieList
export const allMoviesSelector = state => state.movieList.movies;

export const sortBySelector = state => state.movieList.sortBy;
export const sortValueSelector = state => sortBySelector(state).sortValue;
export const sortTypeSelector = state => sortBySelector(state).sortType;

export const searchBySelector = state => state.movieList.searchBy;
export const searchValueSelector = state => searchBySelector(state).searchValue;
export const searchTypeSelector = state => searchBySelector(state).searchType;

// currentMovie
export const movieSelector = state => state.currentMovie.movie;
export const moviesByGenreSelector = state => state.currentMovie.moviesByGenre;
