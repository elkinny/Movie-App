import { getMoviesByGenre, getCurentMovie } from './utils.js';
import mockedData from 'core/data.json';

describe('MovieDetails utils: ', () => {
  it('1. getMoviesByGenre() to filter movies by genre', () => {
    const filteredMovies = getMoviesByGenre('cartoon');
    expect(filteredMovies.length).toEqual(3);
  });

  it('2. getCurentMovie() to return film by id', () => {
    const currentMovie = getCurentMovie(1);
    expect(currentMovie).toEqual(mockedData.movies[1]);
  });
});
