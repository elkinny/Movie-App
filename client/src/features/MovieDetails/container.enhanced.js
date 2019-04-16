import { connect } from 'react-redux';

import MovieDetailsContainer from './container';

import { getMovie } from './actions';
import { movieSelector } from 'core/store/selectors';

export const mapStateToProps = state => ({
  movie: movieSelector(state),
});

const mapDispatchToProps = { getMovie };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieDetailsContainer);
