import SearchFormContainer from './container';
import React from 'react';
import { shallow } from 'enzyme';

describe('SearchFormContainer: ', () => {
  it('1. handleInput() to call setState()', () => {
    const handleInput = jest.fn();
    const component = shallow(
      <SearchFormContainer
        handleSubmit={() => {}}
        handleInput={handleInput}
        searchType={'searchType'}
        state={{}}
      />,
    );
    const inst = component.instance();
    const spy = jest.spyOn(inst, 'setState');
    inst.handleInput({ target: { name: 'name', value: 'value' } });
    expect(spy).toHaveBeenCalled();
  });
});
