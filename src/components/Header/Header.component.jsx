import React from 'react';
import LogoVideomania from '../logos/LogoVideomania/LogoVideomania.component';
import TopNav from '../navigation/TopNav/TopNav.component';
import './Header.styles.scss';


const Header = () => {
  return(
    <header className='header'>
      <div className='logo'>
        <div className="logo__videomania">
          <LogoVideomania />
        </div>
        {/* <HeaderLogoTMDB /> */}
        <TopNav />
      </div>
    </header>
  )
}

export default Header;