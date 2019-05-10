import { mapStateToProps } from './container.enhanced';

describe('MovieDetailsComponent_enhanced: ', () => {
  it('1. mapStateToProps() to return proper object', () => {
    const state = {
      currentMovie: {
        movie: {},
        moviesByGenre: [],
      },
    };

    expect(mapStateToProps(state)).toEqual(state.currentMovie);
  });
});
