import React from 'react';
import ItemCard from '../../components/ItemCard/ItemCard.component';
import withFetch from '../../components/HOC/withFetch.component';
import { getMovieDetails } from '../../utils/tmdb_api';
import { TYPE_MOVIE } from '../../utils/constants'

const MovieCardPage = (props) => {
  const Card = withFetch(ItemCard, getMovieDetails(props.match.params.id));
  console.log(props);
  return(
    <Card type={TYPE_MOVIE} />
  )
}

export default MovieCardPage;