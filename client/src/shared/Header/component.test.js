import Header from './Header';
import React from 'react';
import { mount } from './../../test/enzymeSetup.js';
import { BrowserRouter } from 'react-router-dom';

describe('Header: ', () => {
  it('Header to match snapshot', () => {
    const component = mount(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
