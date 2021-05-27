import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar as farStar} from '@fortawesome/free-regular-svg-icons';
// import { faStar as fasStar} from '@fortawesome/free-solid-svg-icons';
// import { faPlus as fasPlus} from '@fortawesome/free-solid-svg-icons';
// import { faCheck as fasCheck} from '@fortawesome/free-solid-svg-icons';
import { faBookmark as farBookmark} from '@fortawesome/free-regular-svg-icons';
import { faBookmark as fasBookmark} from '@fortawesome/free-solid-svg-icons';


import './StarIcon.styles.scss';

const StarIcon = (props) => {
  return(
    <>
      {
        props.isFavourite ?
          <FontAwesomeIcon icon={fasBookmark} />
        :
          <FontAwesomeIcon icon={farBookmark} />
      }    
    </>
  )
}

export default StarIcon;