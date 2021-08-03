import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    const {current} = this.navRef;
    const {leftBtn, rightBtn, scrollWidth, scrollingPx} = this.state;

    if(direction === 'left') {
      //settings default start position as total size of list - probablu not neeeded
      let currentStartPosition = current.offsetWidth;

      if(this.navRef) { 
        current.scroll({
          left: current.scrollLeft - scrollingPx,
          behavior: 'smooth'
        })

        if(!rightBtn) {
          this.setState({
            rightBtn: true,
          })
        }

        currentStartPosition = current.scrollLeft - scrollingPx;

        if(currentStartPosition <= 0)
        {
          this.setState({
            leftBtn: false,
          })
        }
      }
    } else {
      let currentEndPosition = 0;

      if(this.navRef) {        
        current.scroll({
          left: current.scrollLeft + scrollingPx,
          behavior: 'smooth'
        })

        currentEndPosition = current.offsetWidth + current.scrollLeft + scrollingPx;

        if(!leftBtn) 
        {
          this.setState({
            leftBtn: true,
          })
        }

        if(currentEndPosition >= scrollWidth) 
        {
          this.setState({
            rightBtn: false,
          })
        }
      }          
    }
  }

  getCardSize(element) {
    const rigthMarginPx = parseInt(window.getComputedStyle(element.firstChild).marginRight, 10);
    return rigthMarginPx + element.firstChild.offsetWidth;
  }

  getNumVisibleCards(element, cardSize) {
    return element.offsetWidth / cardSize;
  }

  getExtraSpace(element, cardSize) {
    return element.offsetWidth % cardSize;
  }

  getScrollingPx(element) {    
    const cardSize = this.getCardSize(element);
    //now: need to calculate the number of VISIBLE pixel in order to calculate how many cards are visible 
    const numVisibleCards = this.getNumVisibleCards(element, cardSize);    
    const scrollingPx = cardSize * numVisibleCards - this.getExtraSpace(element, cardSize);
    return scrollingPx;
  }

  filterListNoImg(list) {
    return list.filter(item => item.poster_path != null);
  }

  componentDidUpdate() {
    // 1) need to calculate the size of a card and then move right or left based on that

    //   In order to calculate the proper scrolling: 

    //    - total size of a single card (offsetWidth + margin [border included])
    //    - divide offsetWidth/total size of single card ---> I get number of items visible
    //    - scroll by (number of items * total size of single card) [plus/minus]
    console.log('Updated');
    const {scrollWidth} = this.state;

    if(this.navRef.current && this.navRef.current.firstChild){
      const {current} = this.navRef;
      
      if(scrollWidth !== current.scrollWidth) {

        this.setState({
          scrollWidth: current.scrollWidth,
          scrollingPx: this.getScrollingPx(current),
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
    // console.table(list)
  
    switch(type) {
      case TYPE_MOVIE:
        cards = this.filterListNoImg(list).map(item => <MovieListCard data={item} key={item.id} type={type} />);
        break;
      case TYPE_TVSHOW:
        cards = this.filterListNoImg(list).map(item => <TvListCard data={item} key={item.id} type={type} />);
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

    return(
      <div className={`list section-grid `} >
        {/* <div className='list__top'> */}
        <div className={type === TYPE_CAST || type === TYPE_MEDIA || props.search ? 'list__top full' : 'list__top'}>
          <div className='list__top--wrapper'>
            <h2 className={type === TYPE_CAST || type === TYPE_MEDIA || props.search ? 'section-title full' : 'section-title'}>{title}</h2>
            <div className='list__top--controls'>
              <button 
                className={`list__top--btns list__top--btns--left 
                ${leftBtn ? 'list__top--btns--visible' : ''}
                `}
                onClick={event => {this.handleScroll(event, 'left')}}
                disabled={leftBtn ? false : true}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button> 

              <button 
                className={`list__top--btns list__top--btns--right 
                ${rightBtn ? 'list__top--btns--visible' : ''}
                `}
                onClick={event => {this.handleScroll(event, 'right')}}
                disabled={rightBtn ? false : true}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
        <div className='list__container section-grid full'>

          <section 
            className={type === TYPE_CAST || type === TYPE_MEDIA || props.search? 'list__wrapper full' : 'list__wrapper'} 
            ref={this.navRef}
          >
            {cards}
          </section>

        </div>
      </div>
    )
  }
}


export default HorizontalList;