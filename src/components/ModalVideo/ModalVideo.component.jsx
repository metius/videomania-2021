import React, { Component } from 'react';
import './ModalVideo.styles.scss';

class ModalVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }
  }

  render() {
    return(
      this.state.isOpen && 
      <div className='modal-video'></div>
    )
  }
}

export default ModalVideo;