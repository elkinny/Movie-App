import reducer from './reducer';
import { GET_MOVIE, GET_MOVIES_BY_GENRE } from 'core/store/constants.js';

describe('MovieDetails reducer: ', () => {
  const action = {
    payload: 'payload',
  };

  const state = {};

  it('1. GET_MOVIE', () => {
    action.type = GET_MOVIE;
    const value = reducer(state, action);
    expect(value).toEqual({ movie: 'payload' });
  });

  it('2. GET_MOVIES_BY_GENRE', () => {
    action.type = GET_MOVIES_BY_GENRE;
    const value = reducer(state, action);
    expect(value).toEqual({ moviesByGenre: 'payload' });
  });
});
