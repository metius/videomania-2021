import React from 'react';
import './LogoTMDB.styles.scss';

const LogoTMDB = () => {
  return(
    <div class="logo--tmdb">
      <span class="logo--tmdb__text">Powered by</span>
      <img src="assets/img/tmdb_logo_horz.svg" class="logo--tmdb__img" alt="The Movie DB Logo" />
    </div>
  )
}

export default LogoTMDB;