//images constants
export const S_BACKDROP = 'w300';
export const M_BACKDROP = 'w780';
export const L_BACKDROP = 'w1280';
export const ORIGINAL_BACKDROP = 'original';

export const XXS_LOGO = 'w45';
export const XS_LOGO = 'w92';
export const S_LOGO = 'w154';
export const M_LOGO = 'w185';
export const L_LOGO = 'w300';
export const XL_LOGO = 'w500';
export const ORIGINAL_LOGO = 'original';

export const XXS_POSTER = 'w92';
export const XS_POSTER = 'w154';
export const S_POSTER = 'w185';
export const M_POSTER = 'w342';
export const L_POSTER = 'w500';
export const XL_POSTER = 'w780';
export const ORIGINAL_POSTER = 'original';

export const S_PROFILE = 'w45';
export const M_PROFILE = 'w185';
export const L_PROFILE = 'h632';
export const ORIGINAL_PROFILE = 'original';

export const S_STILL = 'w92';
export const M_STILL = 'w185';
export const L_STILL = 'w300';
export const ORIGINAL_STILL = 'original';


//this will be eventualy removed and will add to the DB, where it could be updated once per day (as suggested by TMDB)?
export const TMDB_CONF = {
  change_keys: [
    "adult",
    "air_date",
    "also_known_as",
    "alternative_titles",
    "biography",
    "birthday",
    "budget",
    "cast",
    "certifications",
    "character_names",
    "created_by",
    "crew",
    "deathday",
    "episode",
    "episode_number",
    "episode_run_time",
    "freebase_id",
    "freebase_mid",
    "general",
    "genres",
    "guest_stars",
    "homepage",
    "images",
    "imdb_id",
    "languages",
    "name",
    "network",
    "origin_country",
    "original_name",
    "original_title",
    "overview",
    "parts",
    "place_of_birth",
    "plot_keywords",
    "production_code",
    "production_companies",
    "production_countries",
    "releases",
    "revenue",
    "runtime",
    "season",
    "season_number",
    "season_regular",
    "spoken_languages",
    "status",
    "tagline",
    "title",
    "translations",
    "tvdb_id",
    "tvrage_id",
    "type",
    "video",
    "videos"
  ],
  images: {
    base_url: "http://image.tmdb.org/t/p/",
    secure_base_url: "https://image.tmdb.org/t/p/",
    backdrop_sizes: [
      "w300",
      "w780",
      "w1280",
      "original"
    ],
    logo_sizes: [
      "w45",
      "w92",
      "w154",
      "w185",
      "w300",
      "w500",
      "original"
    ],
    poster_sizes: [
      "w92",
      "w154",
      "w185",
      "w342",
      "w500",
      "w780",
      "original"
    ],
    profile_sizes: [
      "w45",
      "w185",
      "h632",
      "original"
    ],
    still_sizes: [
      "w92",
      "w185",
      "w300",
      "original"
    ]
  }
}
