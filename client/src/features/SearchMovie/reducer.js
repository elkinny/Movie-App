/* eslint-disable indent */
import { GET_MOVIES } from 'core/store/constants';

const initialState = {
  hi: 'hi',
  movies: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};
