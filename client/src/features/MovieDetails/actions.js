import { GET_MOVIE } from 'core/store/constants.js';
import axios from 'axios';

export const getMovie = id => dispatch =>
  axios.get(`https://reactjs-cdp.herokuapp.com/movies/${id}`).then(response =>
    dispatch({
      type: GET_MOVIE,
      payload: response.data,
    }),
  );
