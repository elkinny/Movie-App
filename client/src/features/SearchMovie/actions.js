import { GET_MOVIES } from 'core/store/constants.js';
import axios from 'axios';

export const getMovies = () => dispatch => {
  axios
    .get('https://reactjs-cdp.herokuapp.com/movies')
    .then(response =>
      dispatch({
        type: GET_MOVIES,
        payload: response.data.data,
      }),
    )
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .then(function() {
      // always executed
    });
};
