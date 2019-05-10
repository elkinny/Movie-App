import axios from 'axios';

export const getMovie = (that, id) =>
  axios.get(`https://reactjs-cdp.herokuapp.com/movies/${id}`).then(response =>
    that.setState({
      movie: response.data,
    }),
  );