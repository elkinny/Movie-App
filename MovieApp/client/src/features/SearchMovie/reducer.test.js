import reducer from './reducer';
import {
  GET_MOVIES,
  SEARCH_MOVIES,
  SORT_MOVIES,
  SET_SORT_BY,
  SET_SEARCH_BY,
} from 'core/store/constants';

describe('SearchMovie reducer: ', () => {
  const action = {
    payload: 'payload',
  };

  let state;

  beforeEach(() => {
    state = {};
  });

  it('1. GET_MOVIES', () => {
    action.type = GET_MOVIES;
    const value = reducer(state, action);
    expect(value).toEqual({ movies: 'payload' });
  });

  it('2. SEARCH_MOVIES', () => {
    action.type = SEARCH_MOVIES;
    const value = reducer(state, action);
    expect(value).toEqual({ movies: 'payload' });
  });

  it('3. SORT_MOVIES', () => {
    action.type = SORT_MOVIES;
    const value = reducer(state, action);
    expect(value).toEqual({ movies: 'payload' });
  });

  it('4. SET_SORT_BY', () => {
    state.sortBy = {};
    action.type = SET_SORT_BY;
    const value = reducer(state, action);
    expect(value).toEqual({ sortBy: { sortValue: 'payload' } });
  });

  it('5. SET_SEARCH_BY', () => {
    state.searchBy = {};
    action.type = SET_SEARCH_BY;
    const value = reducer(state, action);
    expect(value).toEqual({ searchBy: 'payload' });
  });
});
