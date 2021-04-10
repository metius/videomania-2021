import React from 'react';
import { TYPE_CAST, TYPE_MEDIA } from '../../../utils/constants';
import ListCard from '../ListCard/ListCard.component';

import './ScrollingList.styles.scss';

const ScrollingList = ({list, title, type}) => {
  return(
    <div className='list section-grid'>
      <h2 className={type === TYPE_CAST || type === TYPE_MEDIA ? 'section-title full' : 'section-title'}>{title}</h2>
      <section className={type === TYPE_CAST ? 'list__wrapper full' : 'list__wrapper'}>
      {
        list.map(item => <ListCard data={item} key={item.id} type={type} />)
      }
      </section>
    </div>
  )
}

export default ScrollingList;