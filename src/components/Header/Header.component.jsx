import React from 'react';
import LogoVideomania from './logos/LogoVideomania/LogoVideomania.component';
import LogoTMDB from './logos/LogoTMDB/LogoTMDB.component';
import TopNav from '../navigation/TopNav/TopNav.component';
import './Header.styles.scss';

const Header = () => {
  return(
    <header>
      <div className='logo'>
        <LogoVideomania />
        <LogoTMDB />
      </div>
      <TopNav />
    </header>
  )
}

export default Header;