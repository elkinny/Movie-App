import { connect } from 'react-redux';

import SearchMovieContainer from './container';
import { getMovies, searchMovies, sortMovies, setSortBy, setSearchBy } from './actions';

import { allMoviesSelector, sortValueSelector } from 'core/store/selectors';

export default connect(
  state => ({
    movies: allMoviesSelector(state),
    sortBy: sortValueSelector(state),
  }),
  { getMovies, searchMovies, sortMovies, setSortBy, setSearchBy },
)(SearchMovieContainer);
