import Toggle from './component';
import React from 'react';
import { mount } from 'enzyme';

describe('Toggle: ', () => {
  it('Toggle to match snapshot', () => {
    const props = {
      labels: ['vote_average', 'release_date'],
      type: 'sort',
      text: 'Sort by:',
      onChange: jest.fn(),
      value: true,
    };
    const component = mount(<Toggle {...props} />);
    expect(component).toMatchSnapshot();
  });
});
