import { connect } from 'react-redux';

import MoviesListContainer from './container';
import { allMoviesSelector, sortBySelector, searchBySelector } from 'core/store/selectors';

import { getMovies, sortMovies } from './actions';

export const mapStateToProps = state => ({
  movies: allMoviesSelector(state),
  searchBy: searchBySelector(state),
  sortBy: sortBySelector(state),
});

const mapDispatchToProps = { getMovies, sortMovies };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesListContainer);
