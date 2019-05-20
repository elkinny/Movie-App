import axios from 'axios';

export const getMovies = (that, query) =>
  axios
    .get('https://reactjs-cdp.herokuapp.com/movies', {
      params: {
        search: query ? query.searchValue : '',
        searchBy: query ? query.searchType : '',
      },
    })
    .then(response =>
      that.setState({
        movies: response.data.data,
      }),
    );