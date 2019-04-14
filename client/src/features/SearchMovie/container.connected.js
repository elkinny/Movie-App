import { connect } from 'react-redux';

import SearchMovieContainer from './container';
import { getMovies, searchMovies, sortMovies, setSortBy, setSearchBy } from './actions';

import { allMoviesSelector, sortValueSelector } from 'core/store/selectors';

export const mapStateToProps = state => ({
  movies: allMoviesSelector(state),
  sortBy: sortValueSelector(state),
});

const mapDispatchToProps = { getMovies, searchMovies, sortMovies, setSortBy, setSearchBy };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchMovieContainer);
