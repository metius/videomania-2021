import React from 'react';
import axios from 'axios';
import GridList from '../horizontal-scrolling-list/GridList/GridList.component';
import {getMovie, getTvShow} from '../../utils/tmdb_api';
import {TYPE_MOVIE, TYPE_TVSHOW} from '../../utils/constants';
import './profile.styles.scss';

class FavouriteList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tvs: [],
      movies: [],
    }
  }

  async fetchData(url) {
    const data = await axios.get(url);
    return data.data;
  }

  async getData(itemId, type) {
    if(type === TYPE_MOVIE) {
      const movie = await this.fetchData(getMovie(itemId))
      return movie;
    } else if(type === TYPE_TVSHOW) {
      const tv = await this.fetchData(getTvShow(itemId))
      return tv;
    } else return;
  }

  getAndSet(list, type) {
    Promise.all(list.map((item) => {
      const fetchedData = this.getData(item.itemid, item.type);
      return fetchedData;
    }))
    .then((res) => {
      this.setState({[type]: res})
    })
  }

  splitLists(data) {
    //separate the data in 2 lists - MOVIES and TVSHOWS
    let tvs = [], movies = [];
    data.forEach((item) => {
      const {type} = item;
      if(type === TYPE_TVSHOW) {
        tvs.push(item);
      } else { //type === TYPE_MOVIES
        movies.push(item);
      }
    })
    this.getAndSet(tvs, 'tvs');
    this.getAndSet(movies, 'movies');
  }

  componentDidUpdate(prevProps) {
    if(prevProps.data.length !== this.props.data.length){
      const {data} = this.props;
      
      this.splitLists(data);
    }
  }

  componentDidMount() {
    const {data} = this.props;
    this.splitLists(data);
    
  }  

  render() {
    const {tvs, movies} = this.state;

    return(
      <>
        {tvs.length === 0 && movies.length === 0 ? <p className='profile__main'>{`You don't have any favourite saved.`}</p> : null}
        {tvs.length > 0 ? <GridList title='Your Favourites - Tv Shows' data={tvs} type={TYPE_TVSHOW} /> : null}
        {movies.length > 0 ? <GridList title='Your Favourites - Movies' data={movies} type={TYPE_MOVIE} /> : null}
      </>
    )
  }
}

export default FavouriteList;