import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

import './StarIcon.styles.scss';

const StarIcon = () => {
  return(
    <div className="card-favourite">
      <FontAwesomeIcon icon={faStar} />
      {/* <i className="far fa-star"></i> */}
      {/*onClick: <i class="fas fa-star"></i> */}
    </div>
  )
}

export default StarIcon;