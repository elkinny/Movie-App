import { getMovies } from './utils.js';

describe('SearchMovie utils: ', () => {
  it('1. getMovies() to return all moives', () => {
    const filteredMovies = getMovies('title', 'date', '');
    expect(filteredMovies.length).toBe(10);
  });

  it('2. getMovies() to return only moives with "a" in a  title', () => {
    const filteredMovies = getMovies('title', 'date', 'a');
    expect(filteredMovies.length).toBe(6);
  });

  it('3. getMovies() to return only moives with "ac" in a  title', () => {
    const filteredMovies = getMovies('genres', 'date', 'ac');
    expect(filteredMovies.length).toBe(7);
  });
});
