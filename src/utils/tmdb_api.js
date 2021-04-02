export const TMDB_API = process.env.REACT_APP_TMDB_API_KEY;
export const TMDB_BASE_LINK = 'https://api.themoviedb.org/3/';

export const MOVIE_POPULAR = `${TMDB_BASE_LINK}movie/popular?api_key=${TMDB_API}&language=en-US&page=1`;
export const TV_POPULAR = `${TMDB_BASE_LINK}tv/popular?api_key=${TMDB_API}&language=en-US&page=1`;
export const MOVIE_OUT_NOW = `${TMDB_BASE_LINK}movie/now_playing?api_key=${TMDB_API}&language=en-US&page=1`;
export const TV_ON_AIR_NOW = `${TMDB_BASE_LINK}tv/on_the_air?api_key=${TMDB_API}&language=en-US&page=1`;
