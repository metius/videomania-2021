import React from 'react';
import axios from 'axios';
import HorizontalList from '../horizontal-scrolling-list/HorizontalList/HorizontalList.component';
import {TYPE_CAST, TYPE_MOVIE, TYPE_TVSHOW} from '../../utils/constants';
import {getSearchResults} from '../../utils/tmdb_api';
import './SearchForms.styles.scss';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: {}
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  getResults() {
    const searchQuery = getSearchResults(encodeURI(this.state.query)); //encodeURI(URI) - eventually need to check https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
    //axios.get(getSearchResults(this.state.query))
    axios.get(searchQuery)
      .then(({data}) => {
        this.setState({results: data})       
      })
  }

  onChangeHandler() {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getResults()
        }
      } 
    })
  }



  render() {
    const {query, results} = this.state;

    const tvs = {
      type: TYPE_TVSHOW,
      results: []
    }; 
    const movies = {
      type: TYPE_MOVIE,
      results: []
    }; 
    const persons = {
      type: TYPE_CAST,
      results: []
    };
    if(!(results.results === undefined))
    {
      if(results.results.length > 0) {
        results.results.forEach((result) => {
          if(result.media_type === 'tv') {
            tvs.results.push(result);
          }
          else if(result.media_type === 'movie') {
            movies.results.push(result);
          }
          else { //in this case I will have media_type === 'person'
            persons.results.push(result);
          } 
        })
      }
    }

    return(
      <div className="sign-in-page">
        <div className="login-form">
          <h3 className="login-form__title">Search</h3>
          <form className="login-form__wrapper">
            <input 
              type="text" 
              className="login-form__input" 
              placeholder="Search..." 
              name="query"
              value={query}
              id="searchQuery"
              ref={input => this.search = input}
              onChange={this.onChangeHandler}  
            />
          </form>

          {
            tvs.results.length > 0 
              ? <HorizontalList title='Tv Shows' type={TYPE_TVSHOW} data={tvs} search/>
              : ''
          }
          {
            movies.results.length > 0 
              ? <HorizontalList title='Movies' type={TYPE_MOVIE} data={movies} search/>
              : ''
          }
          {
            persons.results.length > 0 
              ? <HorizontalList title='Cast' type={TYPE_CAST} data={persons.results}/>
              : ''
          }
        </div>
      </div>
    )
  }
}

export default SearchForm;