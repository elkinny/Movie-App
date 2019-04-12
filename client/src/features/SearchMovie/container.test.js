import SearchMovieContainer from './container';
import React from 'react';
import { shallow } from 'enzyme';

describe('SearchMovieContainer: ', () => {
  window.scrollTo = () => {};
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

  it('1. handleInput() to call setSortBy()', () => {
    const setSortBy = jest.fn();
    props.setSortBy = setSortBy;
    const component = shallow(<SearchMovieContainer {...props} />);
    const inst = component.instance();
    const e = { target: { value: 'value' } };

    inst.handleInput(e);
    expect(setSortBy).toHaveBeenCalled();
  });

  it('2. handleInput() to call sortMovies()', () => {
    const sortMovies = jest.fn();
    props.sortMovies = sortMovies;
    const component = shallow(<SearchMovieContainer {...props} />);
    const inst = component.instance();
    const e = { target: { value: 'value' } };

    inst.handleInput(e);
    expect(sortMovies).toHaveBeenCalled();
  });

  it('3. handleSubmit() to call setSearchBy()', () => {
    const setSearchBy = jest.fn();
    props.setSearchBy = setSearchBy;
    const component = shallow(<SearchMovieContainer {...props} />);
    const inst = component.instance();
    const e = { preventDefault: jest.fn() };

    inst.handleSubmit(e, 'searchValue', 'searchType');
    expect(setSearchBy).toHaveBeenCalled();
  });

  it('4. handleSubmit() to call searchMovies()', () => {
    const searchMovies = jest.fn();
    props.searchMovies = searchMovies;
    const component = shallow(<SearchMovieContainer {...props} />);
    const inst = component.instance();
    const e = { preventDefault: jest.fn() };

    inst.handleSubmit(e, 'searchValue', 'searchType');
    expect(searchMovies).toHaveBeenCalled();
  });
});
