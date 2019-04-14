import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { getMovie, getMoviesByGenre } from './actions';

import { GET_MOVIE, GET_MOVIES_BY_GENRE } from 'core/store/constants.js';

describe('MovieDetails actions', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  let store;

  beforeEach(function() {
    moxios.install();

    store = mockStore({});

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

  it('1. getMovie() success', () => {
    const expectedActions = [{ type: GET_MOVIE, payload: { data: {} } }];

    return store.dispatch(getMovie()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('2. getMoviesByGenre() success', () => {
    const expectedActions = [{ type: GET_MOVIES_BY_GENRE, payload: {} }];

    return store.dispatch(getMoviesByGenre()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
