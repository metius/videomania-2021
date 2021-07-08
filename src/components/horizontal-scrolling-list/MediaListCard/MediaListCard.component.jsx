import React, {Component} from 'react';
import ModalVideo from 'react-modal-video'
import {getYouTubeThumbsHD} from '../../../utils/utilities'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {minW480,minW801, minW1025} from '../../../utils/constants';

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

  getResponsiveThumb(videoId, name) {
    return (
      <picture>
        <source media={minW1025} srcSet={getYouTubeThumbsHD(videoId, 'maxresdefault')}/>
        <source media={minW801} srcSet={getYouTubeThumbsHD(videoId, 'sddefault')}/>
        <source media={minW480} srcSet={getYouTubeThumbsHD(videoId, 'hqdefault')}/>
        <img src={getYouTubeThumbsHD(videoId, 'hqdefault')} alt={name} className="card__poster card__poster--media" />
      </picture>
    )
  }

  render() {
    const videoId = this.props.data.key;
    const name = this.props.data.name;
    const site = this.props.data.site;
    
    // https://appleple.github.io/react-modal-video/
    return(
      <div className='card card__media'>
        <ModalVideo channel={site.toLowerCase()} isOpen={this.state.isOpen} videoId={videoId} onClose={() => this.setState({isOpen: false})} />
        <div className='card__thumbs' onClick={this.openModal}>
          {/* <img className="card__poster card__poster--media" src={getYouTubeThumbsHD(videoId)} alt={name} /> */}
          {this.getResponsiveThumb(videoId, name)}
          <div className="card__play-icon">                 
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>
        <h4 className='card__name'>{name}</h4>
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