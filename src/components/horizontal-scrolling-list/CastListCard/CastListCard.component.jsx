import React from 'react';
// import {S_PROFILE, M_PROFILE, L_PROFILE} from '../../../utils/tmdb_constants';
import {S_PROFILE, M_PROFILE} from '../../../utils/tmdb_constants';
import ListCard from '../ListCard/ListCard.component';
import {minW320, minW480} from '../../../utils/constants';
import ResponsiveImages from '../ResponsiveImages/ResponsiveImages.component';

const CastListCard = ({data, type}) => {
  
  const sizeArray = [
    {
      mediaQuery: minW480,
      imgSize: M_PROFILE
    },
    {
      mediaQuery: minW320,
      imgSize: S_PROFILE
    },
  ];

  const picture = 
    <ResponsiveImages 
      imgPath={data.profile_path} 
      altDesc={data.title} 
      defaultSize={S_PROFILE} 
      sizeArray={sizeArray}
    />;

  if(data.profile_path === null) {
    return(

      <ListCard type={type} data={data}>
        <div className="card__cast--empty">  
          <span className="card__cast--image">
            <span className="card__cast--image-inner"></span>
          </span>
        </div>
        <h4 className='card__name'>{data.name}</h4>
      </ListCard>
    )
  } else {
    return(
      <ListCard type={type} data={data} >
        {/* <img className="card__poster" src={getPicturePath(data.profile_path, M_PROFILE)} alt={data.title} /> */}
        {picture}
        <h4 className='card__name'>{data.name}</h4>
      </ListCard>
    )
  }
} 

export default CastListCard;