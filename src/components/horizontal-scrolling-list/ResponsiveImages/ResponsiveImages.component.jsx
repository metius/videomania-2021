import React from 'react';
import {getPicturePath} from '../../../utils/utilities';

// const ResponsiveImages = ({imgPath, altDesc, defaultSize, sizeArray, cssClass}) => {
//   return(
//     <picture>
//       {
//         sizeArray.map((size) => <source media={size.mediaQuery} srcSet={getPicturePath(imgPath, size.imgSize)}/>)
//       }
//       <img src={getPicturePath(imgPath, defaultSize)} alt={altDesc} className={cssClass} />
//     </picture>
//   )
// }

const ResponsiveImages = ({imgPath, altDesc, defaultSize, sizeArray, cssClass}) => {
  
  return(
    <img 
      src={getPicturePath(imgPath, defaultSize)}
      alt={altDesc}
      // width="92"
      // height="138"
      srcSet={ 
        sizeArray.map((size) => `${getPicturePath(imgPath, size.imgSize)} ${size.imgSize.slice(1)}w`)}
      className={cssClass}
      sizes={
        sizeArray.map((size) => `${size.mediaQuery} ${size.imgSize.slice(1)}px`)
      }
    />
  )
}

export default ResponsiveImages;

ResponsiveImages.defaultProps = {
  cssClass: 'card__poster'
}