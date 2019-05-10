import { mapStateToProps } from './container.enhanced';

describe('MovieDetailsComponent_enhanced: ', () => {
  it('1. mapStateToProps() to return proper object', () => {
    const state = {
      movieList: {
        movies: [],
        sortBy: {
          sortValue: 'vote_average',
          sortType: 'desc',
        },
      },
    };

    expect(mapStateToProps(state)).toEqual({
      movies: [],
      sortBy: 'vote_average',
    });
  });
});
