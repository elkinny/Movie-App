import AppComponent from './component';
import React from 'react';
import { mount } from 'enzyme';

describe('AppComponent: ', () => {
  it('1. To match snapshot', () => {
    const props = {
      sortToggleValue: 'sortToggleValue',
      handleToggle: () => {},
    };
    const component = mount(<AppComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
