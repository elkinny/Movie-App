import { GET_MOVIES, SORT_MOVIES } from 'core/store/constants.js';
import axios from 'axios';

import {
  allMoviesSelector,
  sortTypeSelector,
  sortValueSelector,
  currentMovieGenreSelector,
} from 'core/store/selectors';

export const getMovies = data => (dispatch, getState) =>
  axios
    .get('https://reactjs-cdp.herokuapp.com/movies', {
      params: {
        search: data.searchValue || '',
        searchBy: data.searchType || '',
        sortBy: sortValueSelector(getState()),
        sortOrder: sortTypeSelector(getState()),
      },
    })
    .then(response =>
      dispatch({
        type: GET_MOVIES,
        payload: response.data.data,
      }),
    );

export const getMoviesByGenre = () => (dispatch, getState) =>
  axios
    .get('https://reactjs-cdp.herokuapp.com/movies', {
      params: {
        search: currentMovieGenreSelector(getState()),
        searchBy: 'genres',
        sortBy: sortValueSelector(getState()),
        sortOrder: sortTypeSelector(getState()),
      },
    })
    .then(response =>
      dispatch({
        type: GET_MOVIES,
        payload: response.data.data,
      }),
    );

export const sortMovies = () => (dispatch, getState) => {
  let movies = allMoviesSelector(getState());
  const sortBy = sortValueSelector(getState());
  if (sortBy === 'release_date') {
    movies = [...movies].sort((a, b) => {
      if (new Date(b[sortBy]) < new Date(a[sortBy])) return -1;
      if (new Date(b[sortBy]) > new Date(a[sortBy])) return 1;
      return 0;
    });
  } else {
    movies = [...movies].sort((a, b) => b[sortBy] - a[sortBy]);
  }

  return dispatch({
    type: SORT_MOVIES,
    payload: movies,
  });
};
