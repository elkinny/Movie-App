import { withRouter } from 'next/router'

import MovieCard from '../features/MovieCard';
import MoviesList from '../features/MoviesList';
import Layout from '../features/Layout'
import { SubHeader } from '../shared'

const FilmPage = props => 
{
  const {id, genre} = props.router.query;
  return (
    <Layout>
      <MovieCard id={id}/>
      <SubHeader>
          <span>Films {genre ? `by ${genre} genre` : 'you may also like'}</span>
      </SubHeader>
      <MoviesList genre={genre}/>
    </Layout>
  );
}

export default withRouter(FilmPage);