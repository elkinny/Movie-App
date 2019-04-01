import SearchFormComponent from './SearchForm.component';
import React from 'react';
import { shallow, mount } from './../../test/enzymeSetup.js';

describe('test: ', () => {
  const handleSubmit = jest.fn();
  const props = {
    handleSubmit: handleSubmit,
    handleInput: () => {},
    searchToggleValue: 'searchToggleValue',
    state: {},
  };

  it('SearchFormComponent to match snapshot', () => {
    const component = shallow(<SearchFormComponent {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('SearchForm submit', () => {
    const component = mount(<SearchFormComponent {...props} />);
    component.find('form').simulate('submit');
    expect(handleSubmit).toHaveBeenCalled();
  });
});
