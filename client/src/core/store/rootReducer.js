import { combineReducers } from 'redux';
import { reducer as searchMoviesReducer } from 'features/SearchMovie';
import { reducer as movieDetailsReducer } from 'features/MovieDetails';

export default combineReducers({
  movieList: searchMoviesReducer,
  currentMovie: movieDetailsReducer,
});
