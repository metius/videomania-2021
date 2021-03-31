import React from 'react';
import './TopNav.styles.scss';

const TopNav = () => {
  return(
    <nav>
      <ul className="navbar">
        <li className="navbar__item">Home</li>
        <li className="navbar__item">Movies</li>
        <li className="navbar__item">Tv-Shows</li>
        <li className="navbar__item">People</li>
        <li className="navbar__item">Search</li>
      </ul>
    </nav>
  )
}

export default TopNav;