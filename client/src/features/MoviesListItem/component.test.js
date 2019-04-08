import MoviesListItemComponent from './component';
import React from 'react';
import { shallow } from 'enzyme';

describe('MoviesListItemComponent: ', () => {
  it('1. To match snapshot', () => {
    const props = {
      id: '1',
      runtime: '120min',
      vote_average: '4.0',
      title: 'Captain Marvel',
      genres: 'Action',
      release_date: 2019,
      overview:
        'Carol Danvers becomes one of the universe`s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.',
      link: 'https://www.youtube.com/watch?v=0LHxvxdRnYc',
      poster_path:
        'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
    };
    const component = shallow(<MoviesListItemComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
