import React from 'react';
import { Link } from 'react-router-dom';
// import StarIcon from '../../StarIcon/StarIcon.component';

import { getPicturePath, getProfilePic } from '../../../utils/utilities';
import {XXS_POSTER, M_PROFILE, S_PROFILE} from '../../../utils/tmdb_constants';
import './ListCard.styles.scss';

import {TYPE_CAST, TYPE_MEDIA} from '../../../utils/constants';

const ListCard = (props) => {
  // console.log(props);
  // let picture;
  // if(type === TYPE_CAST) {
  //   picture = getPicturePath(data.profile_path, S_PROFILE);
  //   console.log(picture);
  // } else if(type === TYPE_MEDIA) {

  // }
  // else {
  //   picture = getPicturePath(data.poster_path, XXS_POSTER);

  // }
  const id = props.data.id;

  // console.log(data);

  return(
    <div className='card'>
      <Link to={`/${props.type}/${id}`}>
        {props.children}
      </Link>
    </div>
  )
}

export default ListCard;