import { connect } from 'react-redux';

import SearchFormContainer from './container';

import { searchBySelector } from 'core/store/selectors';

export default connect(state => ({
  searchBy: searchBySelector(state),
}))(SearchFormContainer);
