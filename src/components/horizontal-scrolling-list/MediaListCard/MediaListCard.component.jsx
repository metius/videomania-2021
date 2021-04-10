import React from 'react';
import ListCard from '../ListCard/ListCard.component';
import {getYouTubeThumbsHD} from '../../../utils/utilities'

const MediaCard = (props) => {
  console.log(props)
  
  //need to add CSS 
  //need to add FontAwesome icon fo rplay video (and link to video, sa va san dir)
  return(
    <ListCard type={props.type} data={props.data} >
      <img className="card__poster" src={getYouTubeThumbsHD(props.data.key)} alt={props.data.name} />
    </ListCard>
  )
} 

export default MediaCard;