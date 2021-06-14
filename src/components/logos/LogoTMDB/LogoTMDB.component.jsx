import React from 'react';
import {ReactComponent as TMDBLogo} from '../../../assets/img/tmdb_logo_horz.svg';
import './LogoTMDB.styles.scss';

const LogoTMDB = () => {
  return(
    <TMDBLogo className="logo--tmdb__img" alt="The Movie DB Logo"/>
  )
}

export default LogoTMDB;