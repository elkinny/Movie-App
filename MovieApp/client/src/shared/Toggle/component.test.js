import Toggle from './component';
import React from 'react';
import { mount } from 'enzyme';

describe('Toggle: ', () => {
  it('Toggle to match snapshot', () => {
    const props = {
      labels: ['Rate', 'Date'],
      values: ['vote_average', 'release_date'],
      name: 'sort',
      text: 'Sort by:',
      onChange: jest.fn(),
      defaultValue: true,
    };
    const component = mount(<Toggle {...props} />);
    expect(component).toMatchSnapshot();
  });
});
