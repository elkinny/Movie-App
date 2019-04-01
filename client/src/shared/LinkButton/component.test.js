import LinkButton from './LinkButton';
import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

describe('LinkButton: ', () => {
  it('LinkButton to match snapshot', () => {
    const props = {
      to: '/',
    };
    const component = mount(
      <BrowserRouter>
        <LinkButton {...props} />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
