import React, {Component} from 'react';
import ModalVideo from 'react-modal-video'
// import ModalVideo from '../../ModalVideo/ModalVideo.component';
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
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({
      isOpen: true,
    })
  }

  render() {
    console.log(`State in MediaListCard --> ${this.state.isOpen}`);
    const videoId = this.props.data.key;
    const name = this.props.data.name;
    const site = this.props.data.site;

    return(
      <div className='card card__modal-wrapper'>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={videoId} onClose={() => this.setState({isOpen: false})} />
        <img className="card__poster card__poster--media" src={getYouTubeThumbsHD(videoId)} alt={name} onClick={this.openModal}/>
        <div className="card__play-icon">                 
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