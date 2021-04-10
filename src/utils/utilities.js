import { TMDB_CONF } from './tmdb_constants';

export const getPicturePath = (imgPath, size) => `${TMDB_CONF.images.secure_base_url}${size}${imgPath}`;

export const getYouTubeThumbsHD = (id) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

// export const getVideoPic = (imgPath, size) => null;

export const getYearFromDateString = (str) => str.substring(0,4);