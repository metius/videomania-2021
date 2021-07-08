import React from 'react';
import ListCard from '../ListCard/ListCard.component';
import {XXS_POSTER, XS_POSTER, S_POSTER, M_POSTER, L_POSTER, XL_POSTER} from '../../../utils/tmdb_constants';
import {minW320, minW480, minW600, minW801, minW1025, minW1281} from '../../../utils/constants';
import ResponsiveImages from '../ResponsiveImages/ResponsiveImages.component';

const MovieListCard = ({data, type}) => {
  // const title = data.name; //we are not passing title if a movie because we don't show it (for now, in mobile view, no - maybe later?)

  //let's try to use responsive images
  //based on the sizes available, I can create maybe an array of objects?
  const sizeArray = [
    {
      mediaQuery: minW1281,
      imgSize: XL_POSTER
    },
    {
      mediaQuery: minW1025,
      imgSize: L_POSTER
    },
    {
      mediaQuery: minW801,
      imgSize: M_POSTER
    },
    {
      mediaQuery: minW600,
      imgSize: S_POSTER
    },
    {
      mediaQuery: minW480,
      imgSize: XS_POSTER
    },
    {
      mediaQuery: minW320,
      imgSize: XXS_POSTER
    },
  ];
  const picture = 
    <ResponsiveImages 
      imgPath={data.poster_path} 
      altDesc={data.title} 
      defaultSize={XXS_POSTER} 
      sizeArray={sizeArray}
    />;
  return(
    <ListCard type={type} data={data}>
      {picture}
    </ListCard>
  )
} 

export default MovieListCard;