import React, { Component } from 'react';

import MovieCardComponent from './component';

//@flow

type Props = {
  getMovie: (value: string) => mixed,
  movie: ?mixed,
};

class MovieCardContainer extends Component {
  props: Props;

  state = {
    loading: true,
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
    return <MovieCardComponent {...movie} />;
  }
}

export default MovieCardContainer;
