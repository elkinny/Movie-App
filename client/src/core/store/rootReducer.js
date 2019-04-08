import { combineReducers } from 'redux';
import { reducer as searchMoviesReducer } from 'features/SearchMovie';

export default combineReducers({
  movieList: searchMoviesReducer,
});
