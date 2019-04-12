import { connect } from 'react-redux';

import MovieDetailsContainer from './container';

import { getMovie, getMoviesByGenre } from './actions';
import { movieSelector, moviesByGenreSelector } from 'core/store/selectors';

export default connect(
  state => ({
    movie: movieSelector(state),
    moviesByGenre: moviesByGenreSelector(state),
  }),
  { getMovie, getMoviesByGenre },
)(MovieDetailsContainer);
