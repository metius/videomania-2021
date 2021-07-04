import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretLeft, faCaretRight} from '@fortawesome/free-solid-svg-icons';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
// import ListCard from '../ListCard/ListCard.component';
import MovieListCard from '../MovieListCard/MovieListCard.component';
import TvListCard from '../TvListCard/TvListCard.component';
import CastListCard from '../CastListCard/CastListCard.component';
import MediaListCard from '../MediaListCard/MediaListCard.component';

import {TYPE_CAST, TYPE_MOVIE, TYPE_MEDIA, TYPE_TVSHOW} from '../../../utils/constants';
import './HorizontalList.styles.scss';

class HorizontalList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollWidth: 0,
      scrollLeft: 0,
      offsetWidth: 0,
      scrollingPx: 0,
      leftBtn: false,
      rightBtn: false,
      childNumber: 0,
    }

    this.navRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(e, direction) {
    // 1) need to calculate the size of a card and then move right or left based on that

  //   In order to calculate the proper scrolling: 

	//    - total size of a single card (offsetWidth + margin [border included])
	//    - divide offsetWidth/total size of single card ---> I get number of items visible
	//    - scroll by (number of items * total size of single card) [plus/minus]

    const {current} = this.navRef;
    const {leftBtn, rightBtn, scrollWidth, scrollingPx} = this.state;

    console.log('Scrolling pixel calculated:', scrollingPx)

    console.log('Offset:', current.offsetWidth)
    console.log('Width from state:', scrollWidth)
    if(direction === 'left') {
      console.log("Left")
      if(this.navRef) { 
        current.scroll({
          left: current.scrollLeft - scrollingPx,
          behavior: 'smooth'
        })
      }

      if((current.scrollLeft + current.offsetWidth < scrollWidth) && !rightBtn) {
        this.setState({
          rightBtn: true,
        })
      }

      if(current.scrollLeft === 0) {
        this.setState({
          leftBtn: false,
        })
      }
      
    } else {
      console.log("Right")
      if(this.navRef) {

        current.scroll({
          left: current.scrollLeft + scrollingPx,
          behavior: 'smooth'
        })

        if(current.scrollLeft > 0 && !leftBtn) {
          this.setState({
            leftBtn: true,
          })
        }

        if(current.scrollLeft + current.offsetWidth === scrollWidth) {
          this.setState({
            rightBtn: false,
          })
        }
      }          
    }
  }

  componentDidUpdate() {
    console.log('Updated');
    const {scrollWidth} = this.state;

    if(this.navRef.current){
      const {current} = this.navRef;

      console.log('--- Total size of the visible section ----');
      console.log('Section.offsetWidth:', current.offsetWidth)

      console.log('--- Total size of a single card ---');
      console.log('current.firstChild.offsetWidth + rightMarginPx:');
      

      if(scrollWidth !== current.scrollWidth) {
        let cardSize = 0;
        let numVisibleCards = 0;
        let extraSpace = 0;
        if(current.firstChild) {
          const rigthMarginPx = parseInt(window.getComputedStyle(current.firstChild).marginRight, 10);
          cardSize = rigthMarginPx + current.firstChild.offsetWidth;
          //now: need to calculate the number of VISIBLE pixel in order to calculate how many cards are visible
          numVisibleCards = (current.offsetWidth / cardSize);
          extraSpace = (current.offsetWidth % cardSize);

        }

        this.setState({
          scrollWidth: current.scrollWidth,
          // scrollingPx: current.offsetLeft + current.firstChild.offsetWidth,
          scrollingPx: cardSize * numVisibleCards - extraSpace,
          offsetWidth: current.offsetWidth,
          scrollLeft: current.scrollLeft,
        })
      }
    }
  }

  componentDidMount() {
    console.log('Mounted');
    this.setState({
      leftBtn: false,
      rightBtn: true,
    })
  }

  render() {
    const {props} = this;
    const {leftBtn, rightBtn} = this.state;

    if(props.err) {
      //need to handle the error
      console.log(`Data fetching failed with the error ${props.err}`)
    }
    
    if(props.isFetching) {
      //will load a spinner - to be created
      return(
        <div className='spinner'>Loading data....</div>
        )
      }
      
    if(props.data.length === 0) return null;
    
    const list = props.data.results;
    const type = props.type;
    const title = props.title;
  
    let cards;
  
    switch(type) {
      case TYPE_MOVIE:
        cards = list.map(item => <MovieListCard data={item} key={item.id} type={type} />);
        break;
      case TYPE_TVSHOW:
        cards = list.map(item => <TvListCard data={item} key={item.id} type={type} />);
        break;
      case TYPE_CAST:
        cards = props.data.map(item => <CastListCard data={item} key={item.id} type={type} />);
        break;      
      case TYPE_MEDIA:
        cards = props.data.map(item => <MediaListCard data={item} key={item.id} type={type} />);
        break;     
      default:
        return; 
    }

    console.log('Render: ', this.state.scrollWidth)
    console.log('This.ref: ', this.navRef)

    return(
      <div className={`list section-grid `} >
        {/* <div className='list__top'> */}
        <div className={type === TYPE_CAST || type === TYPE_MEDIA || props.search ? 'list__top full' : 'list__top'}>
          <div className='list__top--wrapper'>
            <h2 className={type === TYPE_CAST || type === TYPE_MEDIA || props.search ? 'section-title full' : 'section-title'}>{title}</h2>
            <div className='list__top--controls'>
              <button 
                className={`list__top--btns list__top--btns--left 
                ${leftBtn ? 'list__top--btns--visible' : 'diomusso'}
                `}
                onClick={event => {this.handleScroll(event, 'left')}}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button> 

              <button 
                className={`list__top--btns list__top--btns--right 
                ${rightBtn ? 'list__top--btns--visible' : 'diomusso'}
                `}
                onClick={event => {this.handleScroll(event, 'right')}}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
        <div className='list__container section-grid full'>
          {/* <button 
            className={`list__btns list__btns--left full
            ${leftBtn ? 'list__btns--visible' : 'diomusso'}
            `}
            onClick={event => {this.handleScroll(event, 'left')}}
          >
            <FontAwesomeIcon icon={faCaretLeft} />
          </button>             */}
          <section 
            className={type === TYPE_CAST || type === TYPE_MEDIA || props.search? 'list__wrapper full' : 'list__wrapper'} 
            ref={this.navRef}
          >
            {cards}
          </section>
          {/* <button 
            className={`list__btns list__btns--right full
            ${rightBtn ? 'list__btns--visible' : 'diomusso'}
            `}
            onClick={event => {this.handleScroll(event, 'right')}}
          >
            <FontAwesomeIcon icon={faCaretRight} />
          </button> */}
        </div>
      </div>
    )
  }
}


export default HorizontalList;