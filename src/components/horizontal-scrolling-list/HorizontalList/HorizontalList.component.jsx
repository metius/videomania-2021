import React from 'react';

// import ListCard from '../ListCard/ListCard.component';
import MovieListCard from '../MovieListCard/MovieListCard.component';
import TvListCard from '../TvListCard/TvListCard.component';
import CastListCard from '../CastListCard/CastListCard.component';
import MediaListCard from '../MediaListCard/MediaListCard.component';

import {TYPE_CAST, TYPE_MOVIE, TYPE_MEDIA, TYPE_TVSHOW} from '../../../utils/constants';
import './HorizontalList.styles.scss';

const HorizontalList = (props) => {
  
  if(props.err) {
    //need to handle the error
    console.log(`Data fetching failed with the error ${props.err}`)
  }
  
  if(props.isFetching) {
    //will load a spinner - to be created
    return(
      <div className='spinner'>Loading data....</div>
      )
    }
    
  if(props.data.length === 0) return null;
  
  const list = props.data.results;
  const type = props.type;
  const title = props.title;

  let cards;

  switch(type) {
    case TYPE_MOVIE:
      cards = list.map(item => <MovieListCard data={item} key={item.id} type={type} />);
      break;
    case TYPE_TVSHOW:
      cards = list.map(item => <TvListCard data={item} key={item.id} type={type} />);
      break;
    case TYPE_CAST:
      cards = props.data.map(item => <CastListCard data={item} key={item.id} type={type} />);
      break;      
    case TYPE_MEDIA:
      cards = list.map(item => <MediaListCard data={item} key={item.id} type={type} />);
      break;      
  }

  return(
    <div className='list section-grid'>
      <h2 className={type === TYPE_CAST || type === TYPE_MEDIA ? 'section-title full' : 'section-title'}>{title}</h2>
      <section className={type === TYPE_CAST || type === TYPE_MEDIA ? 'list__wrapper full' : 'list__wrapper'}>
        {cards}
        {

        /* list.map(item => <ListCard data={item} key={item.id} type={type} />) */
        }
      </section>
    </div>
  )
}

export default HorizontalList;