import React from 'react';
import axios from 'axios';
import HorizontalList from '../horizontal-scrolling-list/HorizontalList/HorizontalList.component';
import GridList from '../horizontal-scrolling-list/GridList/GridList.component';
import {getMovie, getTvShow} from '../../utils/tmdb_api';
import {TYPE_MOVIE, TYPE_TVSHOW} from '../../utils/constants';
import './profile.styles.scss';

class FavouriteList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
    }
  }

  async fetchData(url) {
    const data = await axios.get(url);
    console.log('axios:', data);
    return data.data;
  }

  async getData(itemId, type) {
    if(type === TYPE_MOVIE) {
      const movie = await this.fetchData(getMovie(itemId))
      console.log('movie')
      return movie;
    } else if(type === TYPE_TVSHOW) {
      const tv = await this.fetchData(getTvShow(itemId))
      console.log('tv')
      return tv
    } else return;
  }

  componentDidUpdate(prevProps) {
    if(prevProps.data.length !== this.props.data.length){
      const {data} = this.props;
      Promise.all(data.map((item) => {
        const fetchedData = this.getData(item.itemid, item.type);
        return fetchedData;
      }))
      .then((res) => {
        this.setState({results: res})
      })
    }
  }

  componentDidMount() {
    console.log("Component did mount")
    const {data} = this.props;
    Promise.all(data.map((item) => {
      const fetchedData = this.getData(item.itemid, item.type);
      return fetchedData;
    }))
    .then((res) => this.setState({results: res}))
  }

  render() {
    const {results} = this.state;
    console.log("Render", results.length)

    return(
      // <HorizontalList title='My Favourites' data={this.state} type={TYPE_MOVIE} search />
      <GridList title='My Favourites' data={this.state} type={TYPE_MOVIE} />
    )
  }
}

export default FavouriteList;