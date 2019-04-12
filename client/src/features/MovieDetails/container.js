import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieDetailsComponent from './component';

class MovieDetailsContainer extends Component {
  state = {
    id: 0,
    genre: '',
  };

  static propTypes = {
    getMoviesByGenre: PropTypes.func.isRequired,
    getMovie: PropTypes.func.isRequired,
    movie: PropTypes.object.isRequired,
    moviesByGenre: PropTypes.array.isRequired,
  };

  static getDerivedStateFromProps(props, state) {
    const { getMovie, getMoviesByGenre, match, movie } = props;
    if (match.params.id !== state.id) {
      getMovie(match.params.id);
      window.scrollTo(0, 0);
      return {
        id: match.params.id,
      };
    }
    if (movie.genres[0] !== state.genre) {
      getMoviesByGenre(movie.genres[0]);
      return {
        genre: movie.genres[0],
      };
    }
    return state;
  }

  render() {
    const { movie, moviesByGenre } = this.props;
    return <MovieDetailsComponent currentMovie={movie} moviesByGenres={moviesByGenre} />;
  }
}

export default MovieDetailsContainer;
