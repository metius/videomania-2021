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
  // ---> move to componentDidUpdate - this method should "just" handle the scroll
    e.preventDefault();

    const {current} = this.navRef;
    const {leftBtn, rightBtn, scrollWidth, scrollingPx} = this.state;

    if(direction === 'left') {
      console.log("Left")
      //settings default start position as total size of list - probablu not neeeded
      let currentStartPosition = current.offsetWidth;

      if(this.navRef) { 
        current.scroll({
          left: current.scrollLeft - scrollingPx,
          behavior: 'smooth'
        })

        if(!rightBtn) {
          console.log('Enable right button')
          this.setState({
            rightBtn: true,
          })
        }

        currentStartPosition = current.scrollLeft - scrollingPx;
        console.log('CurrentSTartPosition: ', currentStartPosition);
        console.log('Current OffsetWidth', current.offsetWidth);
        console.log('Current ScrollLeft', current.scrollLeft);
        console.log('ScrollingPx:', scrollingPx)
        console.log('Scrollwidth', scrollWidth);

        if(currentStartPosition <= 0)
        {
          console.log('Left - Request re-render for disable left btn')
          this.setState({
            leftBtn: false,
          })
        }
      }
      
      // if((current.scrollLeft + current.offsetWidth < scrollWidth) && !rightBtn) 
      // if((current.scrollLeft + current.offsetWidth < current.scrollWidth) && !rightBtn) 
      // {
      //   console.log('Left - Request re-render for enable right btn')
      //   this.setState({
      //     rightBtn: true,
      //   })
      // }

      // if(current.scrollLeft === 0) 
      // if(currentStartPosition <= 0)
      // {
      //   console.log('Left - Request re-render for disable left btn')
      //   this.setState({
      //     leftBtn: false,
      //   })
      // }
      
    } else {
      console.log("Right")
      let currentEndPosition = 0;

      if(this.navRef) {
        console.log('Current.ScrollLeft - before scroll', current.scrollLeft);
        console.log('ScrollingPx:', scrollingPx)

        current.scroll({
          left: current.scrollLeft + scrollingPx,
          behavior: 'smooth'
        })
        // currentPosition = current.scrollLeft + scrollingPx;
        currentEndPosition = current.scrollLeft + (scrollingPx*2);

        console.log('Current End Position: ', currentEndPosition);
        console.log('Current OffsetWidth', current.offsetWidth);
        console.log('Current ScrollLeft', current.scrollLeft);
        console.log('Scrollwidth', scrollWidth);

        // if(current.scrollLeft > 0 && !leftBtn) 
        if(!leftBtn) 
        {
          console.log('Right - Request re-render for enable left btn')
          this.setState({
            leftBtn: true,
          })
        }

        // if(current.scrollLeft + current.offsetWidth === scrollWidth) 
        if(currentEndPosition >= scrollWidth - this.getCardSize(current)) 
        {
          console.log('Right - Request re-render for disable rigt btn')
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
          // scrollingPx: current.offsetLeft + current.firstChild.offsetWidth,
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
                ${leftBtn ? 'list__top--btns--visible' : ''}
                `}
                onClick={event => {this.handleScroll(event, 'left')}}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button> 

              <button 
                className={`list__top--btns list__top--btns--right 
                ${rightBtn ? 'list__top--btns--visible' : ''}
                `}
                onClick={event => {this.handleScroll(event, 'right')}}
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