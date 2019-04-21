import { connect } from 'react-redux';

import SearchMovieContainer from './container';
import { setSortBy, setSearchBy } from './actions';

import { moviesLengthSelector, sortValueSelector } from 'core/store/selectors';

export const mapStateToProps = state => ({
  sortBy: sortValueSelector(state),
  moviesLength: moviesLengthSelector(state),
});

const mapDispatchToProps = { setSortBy, setSearchBy };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchMovieContainer);
