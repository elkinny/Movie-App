/* eslint-disable indent */
import { SET_SORT_BY } from 'core/store/constants';

const initialState = {
  sortValue: 'vote_average',
  sortType: 'desc',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_BY:
      return {
        ...state,
        sortValue: action.payload,
      };
    default:
      return state;
  }
};
