export const TMDB_API = process.env.REACT_APP_TMDB_API_KEY;
export const TMDB_BASE_LINK = 'https://api.themoviedb.org/3/';

export const MOVIE_POPULAR = `${TMDB_BASE_LINK}movie/popular?api_key=${TMDB_API}&language=en-US&page=1`;
export const TV_POPULAR = `${TMDB_BASE_LINK}tv/popular?api_key=${TMDB_API}&language=en-US&page=1`;
export const MOVIE_OUT_NOW = `${TMDB_BASE_LINK}movie/now_playing?api_key=${TMDB_API}&language=en-US&page=1`;
export const TV_ON_AIR_NOW = `${TMDB_BASE_LINK}tv/on_the_air?api_key=${TMDB_API}&language=en-US&page=1`;


// https://api.themoviedb.org/3/movie/508442?api_key=8079c8ef46a65047553ab8e45b990c53&append_to_response=images,videos,credits&include_image_language=en,null
export const getMovieDetails = (movie) => `${TMDB_BASE_LINK}movie/${movie}?api_key=${TMDB_API}&append_to_response=images,videos,credits&include_image_language=en,null`;


