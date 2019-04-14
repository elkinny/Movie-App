import { connect } from 'react-redux';

import SearchFormContainer from './container';

import { searchBySelector } from 'core/store/selectors';

export const mapStateToProps = state => ({
  searchBy: searchBySelector(state),
});

export default connect(mapStateToProps)(SearchFormContainer);
