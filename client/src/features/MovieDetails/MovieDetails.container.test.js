import MovieDetailsContainer from './MovieDetails.container';
import React from 'react';
import { shallow } from './../../test/enzymeSetup.js';
import data from './../../test/mocked-movies.json';

describe('test: ', () => {
  window.scrollTo = () => {};

  it('movieCardRef test', () => {
    const component = shallow(<MovieDetailsContainer match={{ params: { id: 1 } }} />);
    const inst = component.instance();
    inst.movieCardRef('hi');
    expect(inst.movieCard).toBe('hi');
  });

  it('getMoviesByGenre test', () => {
    const component = shallow(<MovieDetailsContainer match={{ params: { id: 1 } }} />);
    const inst = component.instance();
    const filteredMovies = inst.getMoviesByGenre(data, 'cartoon');
    expect(filteredMovies.length).toBe(3);
  });
});
