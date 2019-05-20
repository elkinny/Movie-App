import { combineReducers } from 'redux';
import { reducer as sortMoviesReducer } from 'features/SearchMovie';
import { reducer as movieDetailsReducer } from 'features/MovieCard';
import { reducer as allMoviesReducer } from 'features/MoviesList';

const formatParams = combineReducers({ sortBy: sortMoviesReducer });

export default combineReducers({
  allMovies: allMoviesReducer,
  formatParams: formatParams,
  currentMovie: movieDetailsReducer,
});
