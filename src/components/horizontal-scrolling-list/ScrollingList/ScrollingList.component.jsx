import React from 'react';
import { TYPE_CAST } from '../../../utils/constants';
import ListCard from '../ListCard/ListCard.component';

import './ScrollingList.styles.scss';

const ScrollingList = ({list, title, type}) => {
  return(
    <div className='list'>
      <h2 className={type === TYPE_CAST ? 'list__title full' : 'list__title'}>{title}</h2>
      <section className='list__wrapper'>
      {
        list.map(item => <ListCard data={item} key={item.id} type={type} />)
      }
      </section>
    </div>
  )
}

export default ScrollingList;