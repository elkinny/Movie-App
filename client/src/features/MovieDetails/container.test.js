import MovieDetailsContainer from './container';
import React from 'react';
import { shallow } from 'enzyme';
import data from './../../test/mocked-movies.json';

describe('MovieDetailsContainer: ', () => {
  window.scrollTo = () => {};
  let component;
  let inst;

  beforeEach(() => {
    component = shallow(<MovieDetailsContainer match={{ params: { id: 1 } }} />);
    inst = component.instance();
  });

  it('1. setMovieCardRef() to set movieCard to ref', () => {
    inst.setMovieCardRef('hi');
    expect(inst.movieCard).toBe('hi');
  });

  it('2. getMoviesByGenre() to filter movies by genre', () => {
    const filteredMovies = inst.getMoviesByGenre(data, 'cartoon');
    expect(filteredMovies.length).toBe(3);
  });
});
