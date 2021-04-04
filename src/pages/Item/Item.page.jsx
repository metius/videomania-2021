import React from 'react';
import ItemCard from '../../components/ItemCard/ItemCard.component';
import withFetch, {} from '../../components/HOC/withFetch.component';

const ItemPage = (props) => {
  // console.log("Props frpm React Router:", props.match.params.id)
  console.log(props)
  // const Item = withFetch(ItemCard,)
  return(
    <div className=''>ciao</div>
  )
}

export default ItemPage;