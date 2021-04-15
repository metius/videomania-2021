import React, { Component } from 'react';
import './ModalVideo.styles.scss';

class ModalVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }

    this.closeModal = this.closeModal.bind(this);
    this.updateFocus = this.updateFocus.bind(this);
  }

  componentDidUpdate(prevProps) {
    console.log(`In componentDidUpdate with prevPros: ${prevProps.isOpen} - currentProp: ${this.props.isOpen}`);
    if(this.props.isOpen != prevProps.isOpen) {
      this.setState({
        isOpen: true,
      })
    }

    if(this.state.isOpen) {
      this.modal.focus();
    }
  }

  openModal() {
    this.setState({
      isOpen: true,
    })
  }

  closeModal () {
    this.setState({isOpen: false})
    if (typeof this.props.onClose === 'function') {
      this.props.onClose();
    }
  }

  updateFocus (e) {
    if (e.keyCode === 9) {
      e.preventDefault()
      e.stopPropagation()
      if (this.modal === document.activeElement) {
        this.modalbtn.focus()
      } else {
        this.modal.focus()
      }
    }
  }

  getVideoUrl(site, videoId) {
    if(site === 'YouTube') {
      return `https://www.youtube.com/embed/${videoId}`;
    } else if(site === 'Vimeo') {
      //<div style="padding:56.25% 0 0 0;position:relative;">
      // <iframe 
      // 	src="https://player.vimeo.com/video/535667880?autoplay=1" 
      // 	style="position:absolute;top:0;left:0;width:100%;height:100%;" 
      // 	frameborder="0" 
      // 	allow="autoplay; fullscreen; picture-in-picture" 
      // 	allowfullscreen>
      // </iframe>
      // </div>
      // <script src="https://player.vimeo.com/api/player.js"></script>
      return `https://www.youtube.com/embed/${videoId}`;
    }
  }

  render() {
    {console.log(`State in ModalVideo --> ${this.state.isOpen}`)};
    return(
      
      this.state.isOpen && 
      <>
        {console.log(`State --> ${this.state.isOpen}`)};
        <div className={this.props.classNames.modalVideo} tabIndex='-1' role='dialog' aria-label={this.props.aria.openMessage} onClick={this.closeModal} ref={node => {this.modal = node;}} onKeyDown={this.updateFocus}>
          <div className={this.props.classNames.modalVideoIframeWrap} >
            <button className={this.props.classNames.modalVideoCloseBtn} aria-label={this.props.aria.dismissBtnMessage} ref={node => {this.modalbtn = node;}} onKeyDown={this.updateFocus} />
            <iframe src={this.getVideoUrl(this.props.site, this.props.videoId)} frameBorder='0' allowFullScreen={this.props.allowFullScreen} tabIndex='-1' />
          </div>          
        </div>
      </>
    )
  }
// 
//   

  static defaultProps = {
    channel: 'youtube',
    isOpen: false,
    youtube: {
      autoplay: 1,
      cc_load_policy: 1,
      color: null,
      controls: 1,
      disablekb: 0,
      enablejsapi: 0,
      end: null,
      fs: 1,
      h1: null,
      iv_load_policy: 1,
      list: null,
      listType: null,
      loop: 0,
      modestbranding: null,
      origin: null,
      playlist: null,
      playsinline: null,
      rel: 0,
      showinfo: 1,
      start: 0,
      wmode: 'transparent',
      theme: 'dark'
    },
    ratio: '16:9',

    allowFullScreen: true,
    animationSpeed: 300,
    classNames: {
      modalVideo: 'modal-video',
      modalVideoClose: 'modal-video-close',
      modalVideoIframeWrap: 'modal-video-movie-wrap',
      modalVideoCloseBtn: 'modal-video-close-btn'
    },
    aria: {
      openMessage: 'You just openned the modal video',
      dismissBtnMessage: 'Close the modal by clicking here'
    }
  }
}

export default ModalVideo;