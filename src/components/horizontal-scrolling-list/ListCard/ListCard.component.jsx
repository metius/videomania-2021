import React from 'react';
import { Link } from 'react-router-dom';

import { getPicturePath } from '../../../utils/utilities';
import {XXS_POSTER, S_POSTER, M_POSTER} from '../../../utils/tmdb_constants';
import './ListCard.styles.scss';

const ListCard = ({data}) => {
  const poster = getPicturePath(data.poster_path, XXS_POSTER);
  const title = data.name;
  const id = data.id;

  return(
    <div className='card'>
      <Link to={`item/${id}`}>
      <img className="card__poster" src={poster} alt={title} />
      {/*           
      <div className="card__favourite">
        <a href="#">
          <i className="far fa-star"></i>
        </a>
      </div> */}
      
      {/* <div className="card__title-box">
        <h4 className="card__title">{title}</h4>
      </div> */}
      </Link>
    </div>
  )
}

export default ListCard;