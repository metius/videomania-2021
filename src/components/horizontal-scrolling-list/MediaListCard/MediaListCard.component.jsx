import React from 'react';
import ListCard from '../ListCard/ListCard.component';
import {getYouTubeThumbsHD} from '../../../utils/utilities'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';

const MediaCard = (props) => {
  console.log(props)
  
  //need to pass the correct link to the video
  return(
    <ListCard type={props.type} data={props.data} >
      <img className="card__poster card__poster--media" src={getYouTubeThumbsHD(props.data.key)} alt={props.data.name} />
      <div class="card__play-icon">                 
        <FontAwesomeIcon icon={faYoutube} />
      </div>
    </ListCard>
  )
} 

export default MediaCard;