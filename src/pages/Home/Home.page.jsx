import React from 'react';
import HorizontalList from '../../components/horizontal-scrolling-list/HorizontalList/HorizontalList.component';
import withFetch from '../../components/HOC/withFetch.component';
import {MOVIE_POPULAR, MOVIE_OUT_NOW, TV_POPULAR, TV_ON_AIR_NOW} from '../../utils/tmdb_api';

import {TYPE_MOVIE, TYPE_TVSHOW} from '../../utils/constants';

// import './Home.styles.scss';

const MoviePopular = withFetch(HorizontalList, MOVIE_POPULAR);
const TvPopular = withFetch(HorizontalList, TV_POPULAR);
const MovieOutNow = withFetch(HorizontalList, MOVIE_OUT_NOW);
const TvOnAirNow = withFetch(HorizontalList, TV_ON_AIR_NOW);

const HomePage = () => {
  return(
    <main>
      <MoviePopular title="Popular Movies" type={TYPE_MOVIE} />
      <TvPopular title="Popular Tv Shows" type={TYPE_TVSHOW} />
      <MovieOutNow  title="At the Theaters" type={TYPE_MOVIE} />
      <TvOnAirNow title="Tv Shows On Air" type={TYPE_TVSHOW} />
    </main>
  )
}

export default HomePage;