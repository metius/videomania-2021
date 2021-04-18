import React from 'react';
import { Link } from 'react-router-dom';

import './ListCard.styles.scss';


const ListCard = (props) => {
  const id = props.data.id;

  return(
    <div className={`card card__${props.type}`} >
      <Link to={`/${props.type}/${id}`}>
        {props.children}
      </Link>
    </div>
  )
}

export default ListCard;