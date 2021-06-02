import React from 'react';
import HorizontalList from '../../components/horizontal-scrolling-list/HorizontalList/HorizontalList.component';
import withFetch from '../../components/HOC/withFetch.component';
import {MOVIE_POPULAR, MOVIE_OUT_NOW, MOVIE_COMING_SOON, MOVIE_TOP_RATED} from '../../utils/tmdb_api';
import {TYPE_MOVIE} from '../../utils/constants';

const MoviePage = () => {
  const MoviePopular = withFetch(HorizontalList, MOVIE_POPULAR);
  const MovieOutNow = withFetch(HorizontalList, MOVIE_OUT_NOW);
  const MovieTopRated = withFetch(HorizontalList, MOVIE_TOP_RATED);
  const MovieComingSoon = withFetch(HorizontalList, MOVIE_COMING_SOON);

  return(
    <>
      <MoviePopular title="Popular Movies" type={TYPE_MOVIE} />
      <MovieOutNow  title="At the Theaters" type={TYPE_MOVIE} />
      <MovieTopRated  title="Top Rated" type={TYPE_MOVIE} />
      <MovieComingSoon  title="Coming Soon" type={TYPE_MOVIE} />
    </>
  )
}

export default MoviePage;