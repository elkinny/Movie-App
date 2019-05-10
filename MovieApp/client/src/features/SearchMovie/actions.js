import { SET_SORT_BY } from 'core/store/constants.js';

export const setSortBy = sortBy => dispatch => {
  return dispatch({
    type: SET_SORT_BY,
    payload: sortBy,
  });
};
