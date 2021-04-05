import React from 'react';
import ItemCard from '../../components/ItemCard/ItemCard.component';
import withFetch from '../../components/HOC/withFetch.component';
import { TYPE_TVSHOW } from '../../utils/constants';
import { getTvShowDetails } from '../../utils/tmdb_api';

const TvCardPage = (props) => {
  const Card = withFetch(ItemCard, getTvShowDetails(props.match.params.id));

  return(
    <Card type={TYPE_TVSHOW} />
  )
}

export default TvCardPage;