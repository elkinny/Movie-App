import { connect } from 'react-redux';

import SearchFormContainer from './container';

import { searchBySelector } from 'core/store/selectors';
import { setSearchBy } from './actions';

export const mapStateToProps = state => ({
  searchBy: searchBySelector(state),
});

const mapDispatchToProps = { setSearchBy };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchFormContainer);
