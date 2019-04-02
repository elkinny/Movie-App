import SearchFormComponent from './component';
import React from 'react';
import { shallow } from 'enzyme';

describe('SearchFormComponent: ', () => {
  const handleSubmit = jest.fn();
  const props = {
    handleSubmit: handleSubmit,
    handleInput: () => {},
    searchToggleValue: 'searchToggleValue',
    searchValue: 'searchValue',
  };

  let component;

  beforeEach(() => {
    component = shallow(<SearchFormComponent {...props} />);
  });

  it('1. To match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('2. To call handleSubmit on submit form', () => {
    component.find('form').simulate('submit');
    expect(handleSubmit).toHaveBeenCalled();
  });
});
