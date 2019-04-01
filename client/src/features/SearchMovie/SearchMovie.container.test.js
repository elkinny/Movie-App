import SearchMovieContainer from './SearchMovie.container';
import React from 'react';
import { shallow } from './../../test/enzymeSetup.js';
import data from './../../test/mocked-movies.json';

describe('SearchMovieContainer: ', () => {
  window.scrollTo = () => {};
  let component;

  beforeEach(() => {
    component = shallow(<SearchMovieContainer sortToggleValue="sortToggleValue" />);
  });

  it('1. formComponentRef() to set formComponent to ref', () => {
    const inst = component.instance();

    inst.formComponentRef('hi');
    expect(inst.formComponent).toBe('hi');
  });

  it('2. handleSubmit() to call setState()', () => {
    component.setState = jest.fn();
    const inst = component.instance();
    const spy = jest.spyOn(inst, 'setState');

    inst.handleSubmit(
      { preventDefault: jest.fn() },
      {
        data: { searchValue: 'searchValue', searchToggleValue: 'searchToggleValue' },
      },
    );
    expect(spy).toHaveBeenCalled();
  });

  it('3. handleSeachToggleChange() to call setState()', () => {
    component.setState = jest.fn();
    const inst = component.instance();
    const spy = jest.spyOn(inst, 'setState');

    inst.handleSeachToggleChange({ target: { value: 'value' } });
    expect(spy).toHaveBeenCalled();
  });

  it('4. getMovies() to return all moives', () => {
    component.setState({ searchValue: '' });
    const inst = component.instance();
    const filteredMovies = inst.getMovies(data);
    expect(filteredMovies.length).toBe(10);
  });

  it('5. getMovies() to return filtered moives', () => {
    component.setState({ searchValue: 'a', searchToggleValue: 'title' });
    const inst = component.instance();
    const filteredMovies = inst.getMovies(data);
    expect(filteredMovies.length).toBe(6);
  });
});
