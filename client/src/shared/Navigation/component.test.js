import Navigation from './Navigation';
import React from 'react';
import { mount } from 'enzyme';

describe('Navigation: ', () => {
  it('Navigation to match snapshot', () => {
    const component = mount(<Navigation>Hi</Navigation>);
    expect(component).toMatchSnapshot();
  });
});
