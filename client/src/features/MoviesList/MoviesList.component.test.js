import MoviesListComponent from './MoviesList.component';
import React from 'react';
import { shallow } from './../../test/enzymeSetup.js';

describe('test: ', () => {
  it('MoviesListComponent to match no films snapshot', () => {
    const props = {
      movies: [],
    };
    const component = shallow(<MoviesListComponent {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('MoviesListComponent to match no films snapshot', () => {
    const props = {
      movies: [
        {
          id: '1',
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
        },
        {
          id: '2',
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
        },
      ],
    };
    const component = shallow(<MoviesListComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
