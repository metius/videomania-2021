import React, {Component} from 'react';
import ModalVideo from '../../ModalVideo/ModalVideo.component';
import {getYouTubeThumbsHD} from '../../../utils/utilities'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';

import './MediaListCard.styles.scss';


class MediaCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }
  }

  render() {
    console.log(this.props);
    const videoId = this.props.data.key;
    const name = this.props.data.name;
    return(
      <div className='card card__modal-wrapper'>
        <ModalVideo />
        <img className="card__poster card__poster--media" src={getYouTubeThumbsHD(videoId)} alt={name} />
        <div class="card__play-icon">                 
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>
    )
  }
} 
  //need to pass the correct link to the video
//   return(
    
//     <div className='card'>
//       <img className="card__poster card__poster--media" src={getYouTubeThumbsHD(props.data.key)} alt={props.data.name} />
//       <div class="card__play-icon">                 
//         <FontAwesomeIcon icon={faYoutube} />
//       </div>
//     </div>
    
//   )
// } 

export default MediaCard;