import SearchMovieComponent from './SearchMovie.component';
import React from 'react';
import { shallow } from 'enzyme';

describe('SearchMovieComponent: ', () => {
  it('1. To match snapshot', () => {
    const props = {
      handleSubmit: () => {},
      handleToggle: () => {},
      moviesCount: 1,
      movies: [],
      searchToggleValue: 'searchToggleValue',
      sortToggleValue: 'sortToggleValue',
      formComponentRef: () => {},
    };
    const component = shallow(<SearchMovieComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
