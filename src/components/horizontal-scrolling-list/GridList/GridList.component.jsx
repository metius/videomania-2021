import React from 'react';
import './GridList.styles.scss';
import '../HorizontalList/HorizontalList.styles.scss';
import {TYPE_CAST, TYPE_MOVIE, TYPE_MEDIA, TYPE_TVSHOW} from '../../../utils/constants';
import MovieListCard from '../MovieListCard/MovieListCard.component';
import TvListCard from '../TvListCard/TvListCard.component';

const GridList = (props) => {
  const list = props.data;
  const type = props.type;
  const title = props.title;
  let cards;

  if(type === TYPE_TVSHOW) {
    cards = list.map(item => {
      return <TvListCard data={item} key={item.id} type={type} />
    });
  }
  else if(type === TYPE_MOVIE) {
    cards = list.map(item => {
      return <MovieListCard data={item} key={item.id} type={type} />
    });
  }
  
  return(
    <div className='grid-list'>
      <h2 className='section-title'>{title}</h2>
      <div className='grid-list__container'>
        {cards}
      </div>
    </div>
  )
}

export default GridList;