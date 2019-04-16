import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieDetailsComponent from './component';

class MovieDetailsContainer extends Component {
  static propTypes = {
    getMovie: PropTypes.func.isRequired,
    movie: PropTypes.object.isRequired,
  };

  _drawNewMovie = () => {
    const { getMovie, match } = this.props;
    getMovie(match.params.id);
    window.scrollTo(0, 0);
  };

  componentDidMount() {
    this._drawNewMovie();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this._drawNewMovie();
    }
  }

  render() {
    const { movie } = this.props;
    return <MovieDetailsComponent currentMovie={movie} />;
  }
}

export default MovieDetailsContainer;
