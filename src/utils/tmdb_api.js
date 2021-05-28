export const TMDB_API = process.env.REACT_APP_TMDB_API_KEY;
export const TMDB_BASE_LINK = 'https://api.themoviedb.org/3/';

export const MOVIE_POPULAR = `${TMDB_BASE_LINK}movie/popular?api_key=${TMDB_API}&language=en-US&page=1`;
export const TV_POPULAR = `${TMDB_BASE_LINK}tv/popular?api_key=${TMDB_API}&language=en-US&page=1`;
export const MOVIE_OUT_NOW = `${TMDB_BASE_LINK}movie/now_playing?api_key=${TMDB_API}&language=en-US&page=1`;
export const TV_ON_AIR_NOW = `${TMDB_BASE_LINK}tv/on_the_air?api_key=${TMDB_API}&language=en-US&page=1`;


// https://api.themoviedb.org/3/movie/508442?api_key=8079c8ef46a65047553ab8e45b990c53&append_to_response=images,videos,credits&include_image_language=en,null
export const getMovieDetails = (movie) => `${TMDB_BASE_LINK}movie/${movie}?api_key=${TMDB_API}&append_to_response=images,videos,credits,recommendations&include_image_language=en,null`;
export const getTvShowDetails = (tvshow) => `${TMDB_BASE_LINK}tv/${tvshow}?api_key=${TMDB_API}&append_to_response=images,videos,credits,recommendations&include_image_language=en,null`;

//https://api.themoviedb.org/3/search/multi?api_key=8079c8ef46a65047553ab8e45b990c53&llanguage=en-US&query=ci&page=1&include_adult=false 
export const getSearchResults = (query) => `${TMDB_BASE_LINK}search/multi?api_key=${TMDB_API}&llanguage=en-US&query=${query}&page=1&include_adult=false`;

//getData functions for FavouriteList (less data than the GetDataDetails function for the ItemCard)
export const getMovie = (movie) => `${TMDB_BASE_LINK}movie/${movie}?api_key=${TMDB_API}&include_image_language=en,null`;
export const getTvShow = (tvshow) => `${TMDB_BASE_LINK}tv/${tvshow}?api_key=${TMDB_API}&include_image_language=en,null`;

