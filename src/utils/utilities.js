import { TMDB_CONF } from './tmdb_constants';

export const getPicturePath = (imgPath, size) => `${TMDB_CONF.images.base_url}${size}${imgPath}`;