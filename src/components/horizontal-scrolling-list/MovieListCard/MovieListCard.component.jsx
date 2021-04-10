import React from 'react';
import ListCard from '../ListCard/ListCard.component';
import {getPicturePath} from '../../../utils/utilities';
import {XXS_POSTER} from '../../../utils/tmdb_constants';

const MovieListCard = ({data, type}) => {
  const img = getPicturePath(data.poster_path, XXS_POSTER);
  // const title = data.name; //we are not passing title if a movie because we don't show it (for now, in mobile view, no - maybe later?)
  return(
    <ListCard type={type} data={data}>
      <img className="card__poster" src={img} alt={data.title} />
    </ListCard>
  )
} 

export default MovieListCard;