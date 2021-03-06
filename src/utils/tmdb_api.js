export const TMDB_API = process.env.REACT_APP_TMDB_API_KEY;
export const TMDB_BASE_LINK = 'https://api.themoviedb.org/3/';

export const MOVIE_POPULAR = `${TMDB_BASE_LINK}movie/popular?api_key=${TMDB_API}&language=en-US&page=1`;
export const MOVIE_OUT_NOW = `${TMDB_BASE_LINK}movie/now_playing?api_key=${TMDB_API}&language=en-US&page=1`;
export const TV_POPULAR = `${TMDB_BASE_LINK}tv/popular?api_key=${TMDB_API}&language=en-US&page=1`;
export const TV_ON_AIR_NOW = `${TMDB_BASE_LINK}tv/on_the_air?api_key=${TMDB_API}&language=en-US&page=1`;

// Lists for Movie page
// https://api.themoviedb.org/3/movie/top_rated?api_key=8079c8ef46a65047553ab8e45b990c53&language=en-US&page=1
export const MOVIE_TOP_RATED = `${TMDB_BASE_LINK}movie/top_rated?api_key=${TMDB_API}&language=en-US&page=1`;
// https://api.themoviedb.org/3/movie/upcoming?api_key=8079c8ef46a65047553ab8e45b990c53&language=en-US&page=1
export const MOVIE_COMING_SOON = `${TMDB_BASE_LINK}movie/upcoming?api_key=${TMDB_API}&language=en-US&page=1`;


// Lists for TV page
// https://api.themoviedb.org/3/tv/airing_today?api_key=8079c8ef46a65047553ab8e45b990c53&language=en-US&page=1
export const TV_TODAY = `${TMDB_BASE_LINK}tv/airing_today?api_key=${TMDB_API}&language=en-US&page=1`;
// https://api.themoviedb.org/3/tv/top_rated?api_key=8079c8ef46a65047553ab8e45b990c53&language=en-US&page=1
export const TV_TOP_RATED = `${TMDB_BASE_LINK}tv/top_rated?api_key=${TMDB_API}&language=en-US&page=1`;


// https://api.themoviedb.org/3/movie/508442?api_key=8079c8ef46a65047553ab8e45b990c53&append_to_response=images,videos,credits&include_image_language=en,null
export const getMovieDetails = (movie) => `${TMDB_BASE_LINK}movie/${movie}?api_key=${TMDB_API}&append_to_response=images,videos,credits,recommendations&include_image_language=en,null`;
export const getTvShowDetails = (tvshow) => `${TMDB_BASE_LINK}tv/${tvshow}?api_key=${TMDB_API}&append_to_response=images,videos,credits,recommendations&include_image_language=en,null`;
// https://api.themoviedb.org/3/person/589477?api_key=8079c8ef46a65047553ab8e45b990c53&language=en-US&&append_to_response=images,movie_credits,tv_credits,external_ids
export const getCastDetails = (cast) =>  `${TMDB_BASE_LINK}person/${cast}?api_key=${TMDB_API}&append_to_response=images,movie_credits,tv_credits,external_ids&include_image_language=en,null`;


//https://api.themoviedb.org/3/search/multi?api_key=8079c8ef46a65047553ab8e45b990c53&llanguage=en-US&query=ci&page=1&include_adult=false 
export const getSearchResults = (query) => `${TMDB_BASE_LINK}search/multi?api_key=${TMDB_API}&llanguage=en-US&query=${query}&page=1&include_adult=false`;

//getData functions for FavouriteList (less data than the GetDataDetails function for the ItemCard)
export const getMovie = (movie) => `${TMDB_BASE_LINK}movie/${movie}?api_key=${TMDB_API}&include_image_language=en,null`;
export const getTvShow = (tvshow) => `${TMDB_BASE_LINK}tv/${tvshow}?api_key=${TMDB_API}&include_image_language=en,null`;

