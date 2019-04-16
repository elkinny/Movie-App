import { combineReducers } from 'redux';
import { reducer as searchMoviesReducer } from 'features/SearchForm';
import { reducer as sortMoviesReducer } from 'features/SearchMovie';
import { reducer as movieDetailsReducer } from 'features/MovieDetails';
import { reducer as allMoviesReducer } from 'features/MoviesList';

const formatParams = combineReducers({ searchBy: searchMoviesReducer, sortBy: sortMoviesReducer });

export default combineReducers({
  allMovies: allMoviesReducer,
  formatParams: formatParams,
  currentMovie: movieDetailsReducer,
});
