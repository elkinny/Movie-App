import { mapStateToProps } from './container.connected';

describe('MovieDetailsComponent_connected: ', () => {
  it('1. mapStateToProps() to return proper object', () => {
    const state = {
      movieList: {
        searchBy: {
          searchValue: '',
          searchType: 'title',
        },
      },
    };

    expect(mapStateToProps(state)).toEqual(state.movieList);
  });
});
