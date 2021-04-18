import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar} from '@fortawesome/free-solid-svg-icons';

import './StarIcon.styles.scss';

const StarIcon = (props) => {
  return(
    <>
      {
        props.isFavourite ?
          <FontAwesomeIcon icon={fasStar} />
        :
          <FontAwesomeIcon icon={farStar} />
      }    
    </>
  )
}

export default StarIcon;