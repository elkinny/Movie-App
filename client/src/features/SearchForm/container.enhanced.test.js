import { mapStateToProps } from './container.enhanced';

describe('MovieDetailsComponent_enhanced: ', () => {
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
