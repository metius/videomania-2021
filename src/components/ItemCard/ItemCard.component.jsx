import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {UserContext} from '../../firebase/UserProvider';
import {getFavouriteDocument, setFavouriteDocument} from '../../firebase/firebase';
import { getPicturePath, getYearFromDateString } from '../../utils/utilities';
import {M_BACKDROP} from '../../utils/tmdb_constants';
// import {S_BACKDROP, L_BACKDROP} from '../../utils/tmdb_constants';
import { TYPE_MOVIE, TYPE_TVSHOW, TYPE_CAST, TYPE_MEDIA } from '../../utils/constants';
import StarIcon from '../StarIcon/StarIcon.component';
import HorizontalList from '../horizontal-scrolling-list/HorizontalList/HorizontalList.component';
import './ItemCard.styles.scss';

class ItemCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isFavourite: false,
    }

    this.setFavourite = this.setFavourite.bind(this);
  }

  componentDidUpdate(prevProps) {
    const {data} = this.props;
    const {user} = this.context;
    
    if(!user) {
      return ;
    } else {
      if(Object.keys(data).length > 0 ) {
        if (data.id !== prevProps.data.id) {
          getFavouriteDocument(user.uid, data.id)
            .then((doc) => {
              if(!doc.empty) {
                this.setState({isFavourite: true})
              }
              else {
                this.setState({isFavourite: false})
              }
            })
            .catch(err => console.log("Error reading the data:", err.message))
        }
      }
    }
  }

  setFavourite() {
    const {user} = this.context;
    const {isFavourite} = this.state;
    const {type, data} = this.props;


    //if USER is not logged in, will redirect to Sign IN page - then will get back here and ADD the favourite
    if(!user) {
      //<Redirect to="/profile" />
      this.props.history.push({
        pathname:"/profile",
        state: {
          from: this.props.location.pathname,
          signin: true
        }
      });

    } else {
      setFavouriteDocument(user.uid, data.id, type)
        .then(() => this.setState({
          isFavourite: !isFavourite,
        }))
    }
  }


  render() {
    const {data, err, type, isFetching, isError} = this.props;
    const {isFavourite} = this.state;    

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

    // console.table(`Data fetched: ${JSON.stringify(data)}`);
    console.log("Reccomended:", data.recommendations)


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
            {/* <h2 className="section-title">Overview</h2> */}
            <h2 className="item-page__overview--title">Overview</h2>
            <p>{data.overview}</p>
          </div>

          {/* //Cast list */}
          <HorizontalList data={data.credits.cast} title='Cast' type={TYPE_CAST} />

          {/* Videos */}
          <HorizontalList data={data.videos.results} title='Videos' type={TYPE_MEDIA} />

          {/* Reccomended movies/tv-shows */}
          <HorizontalList data={data.recommendations} title={`${type === TYPE_MOVIE ? 'Other Movies You Could Like' : 'Other Tv Shows You Could Like'}`} type={`${type === TYPE_MOVIE ? TYPE_MOVIE : TYPE_TVSHOW}`} search/>
            
        </div>
      </article>
    )
  }
}

ItemCard.contextType = UserContext;

export default withRouter(ItemCard);
