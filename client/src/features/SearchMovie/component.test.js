import SearchMovieComponent from './component';
import React from 'react';
import { shallow } from 'enzyme';

describe('SearchMovieComponent: ', () => {
  it('1. To match snapshot', () => {
    const props = {
      handleSubmit: () => {},
      handleToggle: () => {},
      moviesCount: 1,
      movies: [],
      sortBy: 'searchType',
      sortToggleValue: 'sortToggleValue',
      searchType: 'searchType',
    };
    const component = shallow(<SearchMovieComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
