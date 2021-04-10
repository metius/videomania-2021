import React from 'react';
import {S_PROFILE, M_PROFILE} from '../../../utils/tmdb_constants';
import {getPicturePath} from '../../../utils/utilities';
import ListCard from '../ListCard/ListCard.component';

const CastListCard = ({data, type}) => {
  
  if(data.profile_path === null) {
    return(
      // passing the children
      // render props.children --> need to re-think also all the other components - fucking composition
      <ListCard type={type} data={data}>
        <div className="card__cast--empty">  
          <span className="card__cast--image">
            <span className="card__cast--image-inner"></span>
          </span>
        </div>
      </ListCard>
    )
  } else {
    return(
      <ListCard type={type} data={data} >
        <img className="card__poster" src={getPicturePath(data.profile_path, S_PROFILE)} alt={data.title} />
      </ListCard>
    )
  }
} 

export default CastListCard;