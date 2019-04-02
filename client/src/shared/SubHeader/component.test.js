import SubHeader from './component';
import React from 'react';
import { mount } from 'enzyme';

describe('SubHeader: ', () => {
  it('SubHeader to match snapshot', () => {
    const component = mount(<SubHeader>Hi</SubHeader>);
    expect(component).toMatchSnapshot();
  });
});
