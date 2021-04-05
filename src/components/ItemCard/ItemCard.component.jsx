import React from 'react';
import { getPicturePath } from '../../utils/utilities';
import {S_BACKDROP, M_BACKDROP, L_BACKDROP} from '../../utils/tmdb_constants';
import './ItemCard.styles.scss';

const ItemCard = ({data, err, isError, isFetching, type}) => {
  console.log("card props", data);
  const backdropImg = getPicturePath(data.backdrop_path, M_BACKDROP);
  return(
    <main>
      <article className="item-page">
        <div className="item-page__header">
          <img src={backdropImg} alt={data.name} className="item-page__img" />
          {/* 
          --> add to favourite ICON - to be redesign and review
          <div className="item-page__favourite">
            <a href="#">
              <i className="far fa-star"></i>
            </a>
          </div> */}
          <div className="item-page__title-box">
            <h2 className="item-page__title">{data.title}</h2>
          </div>
        </div>
      </article>
    </main>
  )
}

export default ItemCard;