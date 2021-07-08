import React from 'react';
import {getPicturePath} from '../../../utils/utilities';

const ResponsiveImages = ({imgPath, altDesc, defaultSize, sizeArray, cssClass}) => {
  return(
    <picture>
      {
        sizeArray.map((size) => <source media={size.mediaQuery} srcSet={getPicturePath(imgPath, size.imgSize)}/>)
      }
      <img src={getPicturePath(imgPath, defaultSize)} alt={altDesc} className={cssClass} />
    </picture>
  )
}

export default ResponsiveImages;

ResponsiveImages.defaultProps = {
  cssClass: 'card__poster'
}