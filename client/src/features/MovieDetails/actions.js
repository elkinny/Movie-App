import { GET_MOVIE, GET_MOVIES_BY_GENRE } from 'core/store/constants.js';
import axios from 'axios';

export const getMovie = id => dispatch => {
  axios
    .get(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
    .then(response =>
      dispatch({
        type: GET_MOVIE,
        payload: response.data,
      }),
    )
    .catch(function(error) {
      console.log(error);
    });
};

export const getMoviesByGenre = searchValue => dispatch => {
  console.log(searchValue);
  axios
    .get('https://reactjs-cdp.herokuapp.com/movies', {
      params: {
        search: searchValue,
        searchBy: 'genres',
      },
    })
    .then(response =>
      dispatch({
        type: GET_MOVIES_BY_GENRE,
        payload: response.data.data,
      }),
    )
    .catch(function(error) {
      console.log(error);
    });
};
