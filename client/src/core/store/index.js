import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer.js';

const initialState = {
  movieList: {
    movies: [],
    sortBy: {
      sortValue: 'vote_average',
      sortType: 'desc',
    },
    searchBy: {
      searchValue: '',
      searchType: 'title',
    },
  },
  currentMovie: {
    movie: {
      title: '',
      overview: '',
      poster_path: '',
      release_date: '',
      genres: [],
      vote_average: 0,
      runtime: 0,
    },
    moviesByGenre: [],
  },
};
const middleware = [thunk];

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(rootReducer, initialState, enhancer);

export default store;
