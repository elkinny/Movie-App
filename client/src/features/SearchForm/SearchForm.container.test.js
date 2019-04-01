import SearchFormContainer from './SearchForm.container';
import React from 'react';
import { shallow } from './../../test/enzymeSetup.js';

describe('SearchFormContainer: ', () => {
  it('handleInput test', () => {
    const handleInput = jest.fn();
    const component = shallow(
      <SearchFormContainer
        handleSubmit={() => {}}
        handleInput={handleInput}
        searchToggleValue={'searchToggleValue'}
        state={{}}
      />,
    );
    const inst = component.instance();
    const spy = jest.spyOn(inst, 'setState');
    inst.handleInput({ target: { name: 'name', value: 'value' } });
    expect(spy).toHaveBeenCalled();
  });
});
