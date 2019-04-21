import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { getMovies, searchMovies, sortMovies, setSortBy, setSearchBy } from './actions';

import {
  GET_MOVIES,
  SEARCH_MOVIES,
  SORT_MOVIES,
  SET_SORT_BY,
  SET_SEARCH_BY,
} from 'core/store/constants.js';

describe('SearchMovie actions', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  let store;

  beforeEach(function() {
    moxios.install();

    store = mockStore({
      movieList: {
        movies: [],
        sortBy: {
          sortValue: 'vote_average',
          sortType: 'desc',
        },
        searchBy: {
          searchValue: '',
          searchType: 'title',
        },
      },
    });

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { data: {} },
      });
    });
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('1. getMovies()', () => {
    const expectedActions = [{ type: GET_MOVIES, payload: {} }];

    return store.dispatch(getMovies()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('2. searchMovies()', () => {
    const expectedActions = [{ type: SEARCH_MOVIES, payload: {} }];

    return store.dispatch(searchMovies()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('3. sortMovies()', () => {
    const expectedActions = { type: SORT_MOVIES, payload: [] };

    const a = store.dispatch(sortMovies());
    expect(a).toEqual(expectedActions);
  });

  it('4. sortMovies()', () => {
    const expectedActions = { type: SORT_MOVIES, payload: [] };

    const a = store.dispatch(sortMovies());
    expect(a).toEqual(expectedActions);
  });

  it('5. sortMovies()', () => {
    store = mockStore({
      movieList: {
        movies: [
          {
            release_date: '2019-01-02',
          },
          {
            release_date: '2019-01-03',
          },
          {
            release_date: '2019-01-01',
          },
          {
            release_date: '2019-01-01',
          },
        ],
        sortBy: {
          sortValue: 'vote_average',
          sortType: 'desc',
        },
        searchBy: {
          searchValue: '',
          searchType: 'title',
        },
      },
    });
    const expectedActions = {
      type: SORT_MOVIES,
      payload: [
        {
          release_date: '2019-01-03',
        },
        {
          release_date: '2019-01-02',
        },
        {
          release_date: '2019-01-01',
        },
        {
          release_date: '2019-01-01',
        },
      ],
    };

    const a = store.dispatch(sortMovies('release_date'));
    expect(a).toEqual(expectedActions);
  });

  it('6. sortMovies()', () => {
    store = mockStore({
      movieList: {
        movies: [
          {
            data: 1,
          },
          {
            data: 4,
          },
          {
            data: 0,
          },
          {
            data: 5,
          },
        ],
        sortBy: {
          sortValue: 'vote_average',
          sortType: 'desc',
        },
        searchBy: {
          searchValue: '',
          searchType: 'title',
        },
      },
    });
    const expectedActions = {
      type: SORT_MOVIES,
      payload: [
        {
          data: 5,
        },
        {
          data: 4,
        },
        {
          data: 1,
        },
        {
          data: 0,
        },
      ],
    };

    const a = store.dispatch(sortMovies('data'));
    expect(a).toEqual(expectedActions);
  });

  it('6. setSortBy()', () => {
    const expectedActions = { type: SET_SORT_BY, payload: '' };

    const a = store.dispatch(setSortBy(''));
    expect(a).toEqual(expectedActions);
  });

  it('7. setSearchBy()', () => {
    const expectedActions = { type: SET_SEARCH_BY, payload: '' };

    const a = store.dispatch(setSearchBy(''));
    expect(a).toEqual(expectedActions);
  });
});
