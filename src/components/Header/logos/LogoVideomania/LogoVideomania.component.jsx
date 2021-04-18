import React from 'react';
import {Link} from 'react-router-dom';
import './LogoVideomania.styles.scss';

const LogoVideomania = () => {
  return(
    <div className="logo--main">
      <Link to='/'>
        <h1 className="logo--main__text">Videomania</h1>
      </Link>
    </div>
  )
}

export default LogoVideomania;