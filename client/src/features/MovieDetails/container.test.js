import MovieDetailsContainer from './container';
import React from 'react';
import { shallow } from 'enzyme';

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
});
