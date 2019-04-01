import Toggle from './Toggle';
import React from 'react';
import { mount } from './../../test/enzymeSetup.js';

describe('Toggle: ', () => {
  it('Toggle to match snapshot', () => {
    const props = {
      labels: ['Rating', 'Year'],
      type: 'sort',
      text: 'Sort by:',
      onChange: jest.fn(),
      value: true,
    };
    const component = mount(<Toggle {...props} />);
    expect(component).toMatchSnapshot();
  });
});
