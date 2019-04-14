import { mapStateToProps } from './container.connected';

describe('MovieDetailsComponent_connected: ', () => {
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
