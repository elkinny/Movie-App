import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import MoviesListContainer from './container';
import { allMoviesSelector, sortBySelector, currentMovieGenreSelector } from 'core/store/selectors';

import { getMovies, sortMovies, getMoviesByGenre } from './actions';

export const mapStateToProps = state => ({
  movies: allMoviesSelector(state),
  sortBy: sortBySelector(state),
  currentMovieGenre: currentMovieGenreSelector(state),
});

const mapDispatchToProps = { getMovies, sortMovies, getMoviesByGenre };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MoviesListContainer),
);
