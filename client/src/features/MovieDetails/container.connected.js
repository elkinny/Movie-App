import { connect } from 'react-redux';

import MovieDetailsContainer from './container';

import { getMovie, getMoviesByGenre } from './actions';
import { movieSelector, moviesByGenreSelector } from 'core/store/selectors';

export const mapStateToProps = state => ({
  movie: movieSelector(state),
  moviesByGenre: moviesByGenreSelector(state),
});

const mapDispatchToProps = { getMovie, getMoviesByGenre };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieDetailsContainer);
