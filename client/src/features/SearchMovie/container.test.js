import SearchMovieContainer from './container';
import React from 'react';
import { shallow } from 'enzyme';

describe('SearchMovieContainer: ', () => {
  window.scrollTo = () => {};
  let component;

  beforeEach(() => {
    component = shallow(<SearchMovieContainer sortToggleValue="sortToggleValue" />);
  });

  it('1. handleSubmit() to call setState()', () => {
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

  it('2. handleInput() to call setState()', () => {
    component.setState = jest.fn();
    const inst = component.instance();
    const spy = jest.spyOn(inst, 'setState');

    inst.handleInput({ target: { value: 'value' } });
    expect(spy).toHaveBeenCalled();
  });
});
