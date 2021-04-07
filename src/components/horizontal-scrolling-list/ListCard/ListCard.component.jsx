import React from 'react';
import { Link } from 'react-router-dom';
// import StarIcon from '../../StarIcon/StarIcon.component';

import { getPicturePath, getProfilePic } from '../../../utils/utilities';
import {XXS_POSTER, M_PROFILE, S_PROFILE} from '../../../utils/tmdb_constants';
import './ListCard.styles.scss';

import {TYPE_CAST, TYPE_MOVIE, TYPE_TVSHOW} from '../../../utils/constants';

const ListCard = ({data, type}) => {
  let picture;
  if(type === TYPE_CAST) {
    picture = getProfilePic(data.profile_path, S_PROFILE);
    console.log(picture);
  } else {
    picture = getPicturePath(data.poster_path, XXS_POSTER);

  }
  const title = data.name;
  const id = data.id;

  // console.log(data);

  return(
    <div className='card'>
      <Link to={`${type}/${id}`}>
      {/* I should consider to create an IMAGE component to handle different sizes, types (cast, posters, etc), also fpr better handle the responsive  TO DO */}
      <img className="card__poster" src={picture} alt={title} />
      {/* 
        Component for add to favourite - need to re-design

      <StarIcon /> */}
      
      {/* <div className="card__title-box">
        <h4 className="card__title">{title}</h4>
      </div> */}
      </Link>
    </div>
  )
}

export default ListCard;