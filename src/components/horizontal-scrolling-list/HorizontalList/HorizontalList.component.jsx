import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretLeft, faCaretRight} from '@fortawesome/free-solid-svg-icons';
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
      scrollWidthState: 0,
      scrollLeftState: 0,
      offsetWidthState: 0,
      leftBtn: false,
      rightBtn: false,
    }

    this.navRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(e, direction) {
    // 1) need to calculate the size of a card and then move right or left based on that
    // 2) need to make a smooth scrolling

    const {current} = this.navRef;
    const {} = this.state;

    console.log('Offset:', current.offsetWidth)
    console.log('Width from state:', this.state.scrollWidth)
    if(direction === 'left') {
      console.log("Left")
      if(this.navRef) { 
        current.scroll({
          left: current.scrollLeft - 125,
          behavior: 'smooth'
        })
      }

      if(current.scrollLeft + current.offsetWidth < this.state.scrollWidth) {
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
          left: current.scrollLeft + 125, //here I will need to have the size of a card (plus margins) in order to calculate properly the scroll --> I can get the size of the card for the property firstChild of this.navRef (check devTool console)
          behavior: 'smooth'
        })

        if(current.scrollLeft > 0) {
          this.setState({
            leftBtn: true,
          })
        }

        if(current.scrollLeft + current.offsetWidth === this.state.scrollWidth) {
          this.setState({
            rightBtn: false,
          })
        }
      }          
    }

    console.log('Scroll status - after:', current.scrollLeft)
  }

  componentDidUpdate() {
    console.log('Updated')
    
    const {scrollWidth, offsetWidth, scrollLeft} = this.navRef.current;
    const {scrollWidthState} = this.state;

    if(this.navRef.current){
      if(scrollWidthState !== scrollWidth) {
        console.log('ScrollWidth: ', scrollWidth)
        this.setState({
          scrollWidthState: scrollWidth,
          offsetWidthState: offsetWidth,
          scrollLeftState: scrollLeft,
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
        <h2 className={type === TYPE_CAST || type === TYPE_MEDIA || props.search ? 'section-title full' : 'section-title'}>{title}</h2>
        <div className='list__container section-grid full'>
          <button 
            className={`list__btns list__btns--left full
            ${leftBtn ? 'list__btns--visible' : 'diomusso'}
            `}
            onClick={event => {this.handleScroll(event, 'left')}}
          >
            <FontAwesomeIcon icon={faCaretLeft} />
          </button>            
          <section 
            className={type === TYPE_CAST || type === TYPE_MEDIA || props.search? 'list__wrapper full' : 'list__wrapper'} 
            ref={this.navRef}
          >
            {cards}
          </section>
          <button 
            className={`list__btns list__btns--right full
            ${rightBtn ? 'list__btns--visible' : 'diomusso'}
            `}
            onClick={event => {this.handleScroll(event, 'right')}}
          >
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </div>
      </div>
    )
  }
}


export default HorizontalList;