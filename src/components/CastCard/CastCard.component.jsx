import React from 'react';
import ResponsiveImages from '../horizontal-scrolling-list/ResponsiveImages/ResponsiveImages.component';
import { S_PROFILE, M_PROFILE, L_PROFILE, ORIGINAL_PROFILE} from '../../utils/tmdb_constants';
import { minW480, minW600, minW801, minW1025} from '../../utils/constants';
import './CastCard.styles.scss';

const CastCard = ({data}) => {
  console.log(data)

  const sizeArray = [
    // {
    //   mediaQuery: minW1025,
    //   imgSize: ORIGINAL_PROFILE
    // },
    {
      mediaQuery: minW801,
      imgSize: L_PROFILE
    },
    {
      mediaQuery: minW600,
      imgSize: M_PROFILE
    },
    // {
    //   mediaQuery: minW480,
    //   imgSize: S_PROFILE
    // },
  ]

  const picture = 
    <ResponsiveImages 
      imgPath={data.profile_path} 
      altDesc={data.name} 
      defaultSize={M_PROFILE} 
      sizeArray={sizeArray}
      cssClass='cast-page__profile-pic'
  />;

  return(
    <article className="cast-page">
      <div className="cast-page__header">        
        {picture}        
        <div className="cast-page__socials">
          
        </div>
      </div>
      <div className="cast-page__personal-info"></div>
      <div className="cast-page__biography"></div>
      <div className="cast-page__credits">
        <div className="cast-page__credits--movies"></div>
        <div className="cast-page__credits--tv-shows"></div>
      </div>
    </article>
  )
}

export default CastCard;