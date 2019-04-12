import MovieDetailsContainer from './container';
import React from 'react';
import { shallow } from 'enzyme';

describe('MovieDetailsContainer: ', () => {
  window.scrollTo = jest.fn();
  const props = {
    getMovie: jest.fn(),
    getMoviesByGenre: jest.fn(),
    moviesByGenre: [],
    match: {
      params: {
        id: 0,
      },
    },
    movie: {
      genres: [],
    },
  };
  const state = {
    id: 0,
    genre: '',
  };

  describe('1. getMovie', () => {
    beforeEach(() => {
      props.match.params.id = 0;
      state.id = 1;
    });

    it('1.1 getDerivedStateFromProps() to call getMovie if there is new movie selected', () => {
      const getMovie = jest.fn();
      props.getMovie = getMovie;

      MovieDetailsContainer.getDerivedStateFromProps(props, state);
      expect(getMovie).toHaveBeenCalled();
    });

    it('1.2 getDerivedStateFromProps() to call window.scrollTo', () => {
      const spy = jest.spyOn(window, 'scrollTo');

      MovieDetailsContainer.getDerivedStateFromProps(props, state);
      expect(spy).toHaveBeenCalled();
    });

    it('1.3 getDerivedStateFromProps() to return proper object', () => {
      const value = MovieDetailsContainer.getDerivedStateFromProps(props, state);
      expect(value).toEqual({ id: 0 });
    });
  });

  describe('2. getMoviesByGenre', () => {
    beforeAll(() => {
      props.match.params.id = 0;
      state.id = 0;
    });

    beforeEach(() => {
      props.movie.genres = ['genre1'];
      state.genre = 'genre2';
    });

    it('2.1 getDerivedStateFromProps() to call getMoviesByGenre if there is new movie selected', () => {
      const getMoviesByGenre = jest.fn();
      props.getMoviesByGenre = getMoviesByGenre;

      MovieDetailsContainer.getDerivedStateFromProps(props, state);
      expect(getMoviesByGenre).toHaveBeenCalled();
    });

    it('2.2 getDerivedStateFromProps() to return proper object', () => {
      const value = MovieDetailsContainer.getDerivedStateFromProps(props, state);
      expect(value).toEqual({ genre: 'genre1' });
    });
  });

  describe('3. no functions', () => {
    it('3.1 getDerivedStateFromProps() to return state', () => {
      state.id = 0;
      props.match.params.id = 0;
      state.genre = '';
      props.movie.genres = [''];

      const value = MovieDetailsContainer.getDerivedStateFromProps(props, state);
      expect(value).toEqual(state);
    });
  });

  it('4. To match snapshot', () => {
    const component = shallow(<MovieDetailsContainer {...props} />);
    expect(component).toMatchSnapshot();
  });
});
