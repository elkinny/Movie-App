import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieDetailsComponent from './component';

import { connect } from 'react-redux';
import { getMovie, getMoviesByGenre } from './actions';

class MovieDetailsContainer extends Component {
  state = {};

  static getDerivedStateFromProps(props, state) {
    window.scrollTo(0, 0);
    return state;
  }

  componentDidMount() {
    const { getMovie, getMoviesByGenre, match, movie } = this.props;
    getMovie(match.params.id);
    getMoviesByGenre(movie.genres[0]);
  }

  render() {
    const { movie, moviesByGenre } = this.props;
    return <MovieDetailsComponent currentMovie={movie} moviesByGenres={moviesByGenre} />;
  }
}

MovieDetailsContainer.propTypes = {
  getMoviesByGenre: PropTypes.func.isRequired,
  getMovie: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
  moviesByGenre: PropTypes.array.isRequired,
};

export default connect(
  state => ({
    movie: state.currentMovie.movie,
    moviesByGenre: state.currentMovie.moviesByGenre,
  }),
  { getMovie, getMoviesByGenre },
)(MovieDetailsContainer);
