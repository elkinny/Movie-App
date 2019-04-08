import SearchMovieContainer from './container';
import React from 'react';
import { shallow } from 'enzyme';

describe('SearchMovieContainer: ', () => {
  window.scrollTo = () => {};
  let component;

  beforeEach(() => {
    const props = {
      getMovies: () => {},
      searchMovies: () => {},
      sortMovies: () => {},
      setSortBy: () => {},
      setSearchBy: () => {},
      movies: [],
      sortBy: 'vote_average',
      searchBy: {
        searchValue: 'name',
        searchType: 'title',
      },
    };
    component = shallow(<SearchMovieContainer {...props} />);
  });

  it('1. handleSubmit() to call setState()', () => {
    component.setState = jest.fn();
    const inst = component.instance();
    const spy = jest.spyOn(inst, 'setState');

    inst.handleSubmit(
      { preventDefault: jest.fn() },
      {
        data: { searchValue: 'searchValue', searchType: 'searchType' },
      },
    );
    expect(spy).toHaveBeenCalled();
  });

  it('2. handleInput() to call setSortBy()', () => {
    const setSortBy = jest.fn();
    const inst = component.instance();
    component.props.setSortBy = setSortBy;

    inst.handleInput({ target: { value: 'value' } });
    expect(setSortBy).toHaveBeenCalled();
  });

  it('3. handleInput() to call sortMovies()', () => {
    const sortMovies = jest.fn();
    const inst = component.instance();
    component.props.sortMovies = sortMovies;

    inst.handleInput({ target: { value: 'value' } });
    expect(sortMovies).toHaveBeenCalled();
  });
});
