import { TMDB_CONF } from './tmdb_constants';

export const getPicturePath = (imgPath, size) => `${TMDB_CONF.images.secure_base_url}${size}${imgPath}`;

export const getProfilePic = (imgPath, size) => {
  if(imgPath === null) {
    return getPicturePath(imgPath, size);
  } else {
    return getPicturePath(imgPath, size);
  }
}

export const getYearFromDateString = (str) => str.substring(0,4);