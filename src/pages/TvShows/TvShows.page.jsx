import React from 'react';
import HorizontalList from '../../components/horizontal-scrolling-list/HorizontalList/HorizontalList.component';
import withFetch from '../../components/HOC/withFetch.component';
import {TV_POPULAR, TV_ON_AIR_NOW, TV_TODAY, TV_TOP_RATED} from '../../utils/tmdb_api';
import {TYPE_TVSHOW} from '../../utils/constants';

const TvShowsPage = () => {
  const TvPopular = withFetch(HorizontalList, TV_POPULAR);
  const TvOnAirNow = withFetch(HorizontalList, TV_ON_AIR_NOW);
  const TvToday = withFetch(HorizontalList, TV_TODAY);
  const TvTopRated = withFetch(HorizontalList, TV_TOP_RATED);

  return(
    <>            
      <TvPopular title="Popular Tv Shows" type={TYPE_TVSHOW} />
      <TvToday title="Today on Tv" type={TYPE_TVSHOW} />
      <TvOnAirNow title="Tv Shows On Air" type={TYPE_TVSHOW} />
      <TvTopRated title="Top Rated" type={TYPE_TVSHOW} />
    </>
  )
}

export default TvShowsPage;