import SearchMovieContainer from './SearchMovie.container';
import React from 'react';
import { shallow } from './../../test/enzymeSetup.js';
import data from './../../test/mocked-movies.json';

describe('test: ', () => {
  window.scrollTo = () => {};

  it('formComponentRef test', () => {
    const component = shallow(<SearchMovieContainer sortToggleValue="sortToggleValue" />);
    const inst = component.instance();
    inst.formComponentRef('hi');
    expect(inst.formComponent).toBe('hi');
  });

  it('handleSubmit test', () => {
    const component = shallow(<SearchMovieContainer sortToggleValue="sortToggleValue" />);
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

  it('handleSeachToggleChange test', () => {
    const component = shallow(<SearchMovieContainer sortToggleValue="sortToggleValue" />);
    component.setState = jest.fn();
    const inst = component.instance();
    const spy = jest.spyOn(inst, 'setState');

    inst.handleSeachToggleChange({ target: { value: 'value' } });
    expect(spy).toHaveBeenCalled();
  });

  it('getMovies all test', () => {
    const component = shallow(<SearchMovieContainer sortToggleValue="date" />);
    const inst = component.instance();
    const filteredMovies = inst.getMovies(data);
    expect(filteredMovies.length).toBe(10);
  });

  it('getMovies filtered test', () => {
    const component = shallow(<SearchMovieContainer sortToggleValue="date" />);
    component.setState({ searchValue: 'a' });
    const inst = component.instance();
    const filteredMovies = inst.getMovies(data);
    expect(filteredMovies.length).toBe(6);
  });
});
