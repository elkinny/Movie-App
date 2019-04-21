import { SET_SEARCH_BY } from 'core/store/constants.js';

export const setSearchBy = searchBy => dispatch => {
  return dispatch({
    type: SET_SEARCH_BY,
    payload: searchBy,
  });
};
