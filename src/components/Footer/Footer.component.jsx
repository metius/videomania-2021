import React from 'react';
import LogoTMDB from '../logos/LogoTMDB/LogoTMDB.component'
import LogoVideomania from '../logos/LogoVideomania/LogoVideomania.component';
import './Footer.styles.scss';


const Footer = () =>  {
  const year = new Date().getFullYear();

  return(
    <footer className='footer'>
      <div className='footer__top'>
        <LogoVideomania />
      </div>
      <div className='footer__bottom'>
        &copy;{year} Copyright - Designed and Created by <span className='footer__link'><a href="#" target="_blank">mattiaV.</a></span>
      </div>

    </footer>
  )
}

export default Footer;