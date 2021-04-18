import React from 'react';
import {ReactComponent as TMDBLogo} from '../../../../assets/img/tmdb_logo_horz.svg';
import './LogoTMDB.styles.scss';

const LogoTMDB = () => {
  return(
    <div className="logo--tmdb">
      <span className="logo--tmdb__text">Powered by</span>
      <TMDBLogo className="logo--tmdb__img" alt="The Movie DB Logo"/>
    </div>
  )
}

export default LogoTMDB;