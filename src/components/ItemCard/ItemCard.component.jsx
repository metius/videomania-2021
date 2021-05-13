import React, {Component} from 'react';
import {UserContext} from '../../firebase/UserProvider';
import {setFavouriteDocument} from '../../firebase/firebase';
import { getPicturePath, getYearFromDateString } from '../../utils/utilities';
import {M_BACKDROP} from '../../utils/tmdb_constants';
// import {S_BACKDROP, L_BACKDROP} from '../../utils/tmdb_constants';
import { TYPE_MOVIE, TYPE_TVSHOW, TYPE_CAST, TYPE_MEDIA } from '../../utils/constants';
import StarIcon from '../StarIcon/StarIcon.component';
import HorizontalList from '../horizontal-scrolling-list/HorizontalList/HorizontalList.component';
import './ItemCard.styles.scss';

class ItemCard extends Component {

  static contextType = UserContext;

  constructor(props) {
    super(props);

    this.state = {
      isFavourite: false,
      favId: null,
    }

    this.setFavourite = this.setFavourite.bind(this);
  }

  componentDidMount() {
    console.log("In componentDidMount", this.props)
    this.setState({
      isFavourite: false,//In here I will read the state of isFavourite from localStorage/DB/etc...
    })
    
  }

  setFavourite() {
    const {user} = this.context;
    const {isFavourite, favId} = this.state;
    const {type, data} = this.props;

    console.log("Change status of icon: ", this.state.isFavourite)
    //console.log(`User in setFavourite: ${JSON.stringify(user)}`);
    console.log(`User uid: ${user.uid}`)
    //console.table(this.state);

    //set favourite in LocalStorage (or Session Storage) -- 13/05: let0s keep it simple for now. Let's store and read from the DB only
    //create/update Firestore document with user preferences
    const favouriteId = setFavouriteDocument(!isFavourite, user.uid, data.id, type, favId);

    this.setState({
      isFavourite: !isFavourite,
      favId: favouriteId,
    })
    //here I will set/unset the item as Favourite
  }

  render() {
    const {data, err, type, isFetching, isError} = this.props;
    const {isFavourite} = this.state;    
    console.log("In render", this.props)


    if(isError) {
      //need to handle the error
      console.log(`Data fetching failed with the error ${err}`)
    }
    
    if(isFetching) {
      //will load a spinner - to be created
      return(
        <div className='spinner'>Loading data....</div>
        )
      }
      
    if(data.length === 0) return null;

    const backdropImg = getPicturePath(data.backdrop_path, M_BACKDROP);

    let title;
    let runtime;
    let releaseYear;

    //console.table(`Data fetched: ${JSON.stringify(data)}`);

    if( type === TYPE_MOVIE) {
      title = data.title;
      runtime = data.runtime;
      releaseYear = getYearFromDateString(data.release_date);
    } else if ( type === TYPE_TVSHOW ) {
      //id = data.tv_id;
      title = data.name;
      runtime = data.episode_run_time[0];
      releaseYear = getYearFromDateString(data.first_air_date);
    } else {
      title = ' ';
      runtime = 0;
      releaseYear = '---';
    }
    
    return(
      <main>
        <article className="item-page">
          <div className="item-page__header img-shadow">
            <img src={backdropImg} alt={data.name} className="item-page__img " />
            <div 
              className="card-favourite" 
              onClick={this.setFavourite}
            >
              <StarIcon isFavourite={isFavourite} />
            </div>
            <div className="item-page__title-box">
              <h2 className="item-page__title">{title}</h2>
            </div>
          </div>
        
          <div className="item-page__main section-grid">
            <div className="item-page__info">
              <span>{`${data.vote_average}/10`}</span>
              <span>{`${runtime} min`}</span>
              <span>{`${releaseYear}`}</span>          
            </div>

            <div className="item-page__overview">
              <h2 className="section-title">Overview</h2>
              <p>{data.overview}</p>
            </div>

            <HorizontalList data={data.credits.cast} title='Cast' type={TYPE_CAST} />

            <HorizontalList data={data.videos.results} title='Videos' type={TYPE_MEDIA} />
              
          </div>
        </article>
      </main>
    )
  }
}

export default ItemCard;
