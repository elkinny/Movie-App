import { mapStateToProps } from './container.connected';

describe('MovieDetailsComponent_connected: ', () => {
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
