import React from 'react';
import ListCard from '../ListCard/ListCard.component';
import './HorizontalList.styles.scss';

const HorizontalList = (props) => {
  console.log(props);

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

  return(
    <div className='grid'>
      <h2 className="hz-list__title">What's popular</h2>
      {
        list.map(item => <ListCard data={item} key={item.id} />)
      }
    </div>
  )
}

export default HorizontalList;