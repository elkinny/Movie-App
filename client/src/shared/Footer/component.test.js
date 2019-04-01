import Footer from './component';
import React from 'react';
import { mount } from 'enzyme';

describe('Footer: ', () => {
  it('Footer to match snapshot', () => {
    const component = mount(<Footer />);
    expect(component).toMatchSnapshot();
  });
});
