import React from 'react';
import './TopNav.styles.scss';

const TopNav = () => {
  return(
    <nav>
      <ul class="navbar">
        <li class="navbar__item">Home</li>
        <li class="navbar__item">Movies</li>
        <li class="navbar__item">Tv-Shows</li>
        <li class="navbar__item">People</li>
        <li class="navbar__item">Search</li>
      </ul>
    </nav>
  )
}

export default TopNav;