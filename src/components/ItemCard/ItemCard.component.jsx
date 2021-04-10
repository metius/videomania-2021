import React from 'react';
import { getPicturePath, getYearFromDateString } from '../../utils/utilities';
import {M_BACKDROP} from '../../utils/tmdb_constants';
// import {S_BACKDROP, L_BACKDROP} from '../../utils/tmdb_constants';
import { TYPE_MOVIE, TYPE_TVSHOW, TYPE_CAST, TYPE_MEDIA } from '../../utils/constants';

import StarIcon from '../StarIcon/StarIcon.component';

import HorizontalList from '../horizontal-scrolling-list/HorizontalList/HorizontalList.component';

import './ItemCard.styles.scss';

const ItemCard = ({data, err, isError, isFetching, type}) => {

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
  let runtime;
  let releaseYear;

  if( type === TYPE_MOVIE) {
    title = data.title;
    runtime = data.runtime;
    releaseYear = getYearFromDateString(data.release_date);
  } else if ( type === TYPE_TVSHOW ) {
    title = data.name;
    runtime = data.episode_run_time[0];
    releaseYear = getYearFromDateString(data.first_air_date);
  } else {
    title = ' ';
    runtime = 0;
    releaseYear = '---';
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
      
        <div className="item-page__main section-grid">
          <div className="item-page__info">
            <span>{`${data.vote_average}/10`}</span>
            <span>{`${runtime} min`}</span>
            <span>{`${releaseYear}`}</span>          
          </div>

          <div className="item-page__overview">
            <h2 className="section-title">Overview</h2>
            <p>{data.overview}</p>
          </div>

          {/* Render horizontal list type=CAST */}
          {/* <ScrollingList list={data.credits.cast} title='Cast' type={TYPE_CAST} /> */}
          <HorizontalList data={data.credits.cast} title='Cast' type={TYPE_CAST} />
          {/* Render horizontal list type=MEDIA */}
          <HorizontalList data={data.videos.results} title='Videos' type={TYPE_MEDIA} />
            
        </div>
      </article>
    </main>
  )
}

export default ItemCard;