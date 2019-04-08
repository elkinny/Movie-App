/* eslint-disable indent */
import {
  GET_MOVIES,
  SEARCH_MOVIES,
  SORT_MOVIES,
  SET_SORT_BY,
  SET_SEARCH_BY,
} from 'core/store/constants';

export default (state = [], action) => {
  switch (action.type) {
    case GET_MOVIES:
    case SEARCH_MOVIES:
    case SORT_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: {
          ...state.sortBy,
          sortValue: action.payload,
        },
      };
    case SET_SEARCH_BY:
      return {
        ...state,
        searchBy: action.payload,
      };
    default:
      return state;
  }
};
