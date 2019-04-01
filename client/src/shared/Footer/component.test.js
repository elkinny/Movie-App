import Footer from './Footer';
import React from 'react';
import { mount } from 'enzyme';

describe('Footer: ', () => {
  it('Footer to match snapshot', () => {
    const component = mount(<Footer />);
    expect(component).toMatchSnapshot();
  });
});
