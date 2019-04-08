/* eslint-disable indent */
import { GET_MOVIE, GET_MOVIES_BY_GENRE } from 'core/store/constants.js';

export default (state = [], action) => {
  switch (action.type) {
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };
    case GET_MOVIES_BY_GENRE:
      return {
        ...state,
        moviesByGenre: action.payload,
      };
    default:
      return state;
  }
};
