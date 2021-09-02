import React from 'react';
// import ItemCard from '../../components/ItemCard/ItemCard.component';
import CastCard from '../../components/CastCard/CastCard.component';
import withFetch from '../../components/HOC/withFetch.component';
import { getCastDetails } from '../../utils/tmdb_api';
import { TYPE_CAST } from '../../utils/constants'

const CastPage = (props) => {
  const Card = withFetch(CastCard, getCastDetails(props.match.params.id));

  return(
    <Card type={TYPE_CAST} />
  )
}

export default CastPage;