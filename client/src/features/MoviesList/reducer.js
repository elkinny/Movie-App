/* eslint-disable indent */
import { GET_MOVIES, SORT_MOVIES } from 'core/store/constants';

const initialState = {
  movies: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
    case SORT_MOVIES:
      return {
        ...state,
        movies: action.payload,
        length: action.payload.length,
      };
    default:
      return state;
  }
};
