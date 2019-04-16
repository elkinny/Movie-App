/* eslint-disable indent */
import { SET_SEARCH_BY } from 'core/store/constants';

const initialState = {
  searchValue: '',
  searchType: 'title',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_BY:
      return {
        ...state,
        searchType: action.payload.searchType,
        searchValue: action.payload.searchValue,
      };
    default:
      return state;
  }
};
