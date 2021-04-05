import React from 'react';
import { getPicturePath } from '../../utils/utilities';
import {S_BACKDROP, M_BACKDROP, L_BACKDROP} from '../../utils/tmdb_constants';
import { TYPE_MOVIE, TYPE_TVSHOW } from '../../utils/constants';

import StarIcon from '../StarIcon/StarIcon.component';

import './ItemCard.styles.scss';

const ItemCard = ({data, err, isError, isFetching, type}) => {
  console.log("card props", data);

  if(isError) {
    //need to handle the error
    console.log(`Data fetching failed with the error ${err}`)
  }
  
  if(isFetching) {
    //will load a spinner - to be created
    return(
      <div className='spinner'>Loading data....</div>
      )
    }
    
  if(data.length === 0) return null;

  const backdropImg = getPicturePath(data.backdrop_path, M_BACKDROP);
  
  let title;
  if( type === TYPE_MOVIE) {
    title = data.title;
  } else if ( type === TYPE_TVSHOW ) {
    title = data.name;
  } else {
    title = ' ';
  }
  return(
    <main>
      <article className="item-page">
        <div className="item-page__header">
          <img src={backdropImg} alt={data.name} className="item-page__img" />
          <StarIcon />
          <div className="item-page__title-box">
            <h2 className="item-page__title">{title}</h2>
          </div>
        </div>
      </article>
    </main>
  )
}

export default ItemCard;