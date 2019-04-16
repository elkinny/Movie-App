import { SET_SORT_BY, SET_SEARCH_BY } from 'core/store/constants.js';

export const setSortBy = sortBy => dispatch => {
  return dispatch({
    type: SET_SORT_BY,
    payload: sortBy,
  });
};

export const setSearchBy = searchBy => dispatch => {
  return dispatch({
    type: SET_SEARCH_BY,
    payload: searchBy,
  });
};
