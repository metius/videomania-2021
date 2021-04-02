import React from 'react';
import HorizontalList from '../../components/horizontal-scrolling-list/HorizontalList/HorizontalList.component';
import withFetch from '../../components/HOC/withFetch.component';
import {MOVIE_POPULAR, MOVIE_OUT_NOW, TV_POPULAR, TV_ON_AIR_NOW} from '../../utils/tmdb_api';

import './Home.styles.scss';

const MoviePopular = withFetch(HorizontalList, MOVIE_POPULAR);
const TvPopular = withFetch(HorizontalList, TV_POPULAR);
const MovieOutNow = withFetch(HorizontalList, MOVIE_OUT_NOW);
const TvOnAirNow = withFetch(HorizontalList, TV_ON_AIR_NOW);

const HomePage = () => {
  return(
    <main>
      <MoviePopular title="Popular Movies"/>
      <TvPopular title="Popular Tv Shows"/>
      <MovieOutNow  title="At the Theaters"/>
      <TvOnAirNow title="Tv Shows On Air"/>
    </main>
  )
}

export default HomePage;