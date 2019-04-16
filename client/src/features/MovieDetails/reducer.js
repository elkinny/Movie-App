/* eslint-disable indent */
import { GET_MOVIE } from 'core/store/constants.js';

const initialState = {
  movie: {
    title: '',
    overview: '',
    poster_path: '',
    release_date: '',
    genres: [],
    vote_average: 0,
    runtime: 0,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };
    default:
      return state;
  }
};
