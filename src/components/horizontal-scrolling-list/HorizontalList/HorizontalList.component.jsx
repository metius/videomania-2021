import React from 'react';
import ListCard from '../ListCard/ListCard.component';
import './HorizontalList.styles.scss';

const HorizontalList = (props) => {
  
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
  // console.log(props);
  //console.log(list);

  return(
    <div className='list'>
      <h2 className="list__title">{props.title}</h2>
      <section className="list__wrapper">
      {
        list.map(item => <ListCard data={item} key={item.id} />)
      }
      </section>
    </div>
  )
}

export default HorizontalList;