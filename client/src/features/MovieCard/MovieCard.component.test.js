import MovieCardComponent from './MovieCard.component';
import React from 'react';
import { shallow } from 'enzyme';

describe('MovieCardComponent: ', () => {
  it('1. To match snapshot', () => {
    const props = {
      ref: () => {},
      duration: '120min',
      rating: '4.0',
      title: 'Captain Marvel',
      genre: 'Action',
      year: 2019,
      description:
        'Carol Danvers becomes one of the universe`s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.',
      link: 'https://www.youtube.com/watch?v=0LHxvxdRnYc',
      picLink:
        'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
    };
    const component = shallow(<MovieCardComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
