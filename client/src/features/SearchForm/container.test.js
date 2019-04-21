import SearchFormContainer from './container';
import React from 'react';
import { shallow } from 'enzyme';

describe('SearchFormContainer: ', () => {
  it('1. handleInput() to call setState()', () => {
    const handleInput = jest.fn();
    const props = {
      handleSubmit: jest.fn(),
      handleInput: handleInput,
      searchBy: {
        searchType: 'searchType',
        searchValue: 'searchValue',
      },
      state: {},
    };
    const component = shallow(<SearchFormContainer {...props} />);
    const inst = component.instance();
    const spy = jest.spyOn(inst, 'setState');
    inst.handleInput({ target: { name: 'name', value: 'value' } });
    expect(spy).toHaveBeenCalled();
  });
});
