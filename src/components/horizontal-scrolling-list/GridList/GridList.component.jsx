import React from 'react';
import './GridList.styles.scss';
import '../HorizontalList/HorizontalList.styles.scss';
import {TYPE_CAST, TYPE_MOVIE, TYPE_MEDIA, TYPE_TVSHOW} from '../../../utils/constants';
import MovieListCard from '../MovieListCard/MovieListCard.component';

const GridList = (props) => {
  const list = props.data.results;
  const type = props.type;
  const title = props.title;

  const cards = list.map(item => <MovieListCard data={item} key={item.id} type={type} />);
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