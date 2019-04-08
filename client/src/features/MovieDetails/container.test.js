import MovieDetailsContainer from './container';

describe('MovieDetailsContainer: ', () => {
  window.scrollTo = jest.fn();

  it('1. getDerivedStateFromProps() to call window.scrollTo', () => {
    const spy = jest.spyOn(window, 'scrollTo');
    MovieDetailsContainer.getDerivedStateFromProps(null, {});
    expect(spy).toHaveBeenCalled();
  });
});
