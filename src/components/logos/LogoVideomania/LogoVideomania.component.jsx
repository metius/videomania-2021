import React from 'react';
import {Link} from 'react-router-dom';
import './LogoVideomania.styles.scss';

const LogoVideomania = () => {
  return(    
      <Link to='/'>
        <h1 className="videomania__logo">Videomania</h1>
      </Link>
  )
}

export default LogoVideomania;