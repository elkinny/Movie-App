import React, { PureComponent } from 'react';

import MovieCard from 'components/MovieCard';
import { Navigation } from 'components/Common';

export default class SearchForm extends PureComponent {
  state = {
    id: '1',
    duration: '120min',
    rating: '4.5',
    title: 'Captain Marvel',
    genre: 'Action',
    year: 2019,
    description:
      'Carol Danvers becomes one of the universe`s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.',
    link: 'https://www.youtube.com/watch?v=0LHxvxdRnYc',
    picLink:
      'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
  };

  render() {
    return (
      <>
        <MovieCard {...this.state} />
        <Navigation>
          <span>Films by {this.state.genre} genre</span>
        </Navigation>
      </>
    );
  }
}
