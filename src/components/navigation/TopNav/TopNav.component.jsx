import React from 'react';
import {NavLink} from 'react-router-dom';
import ProfileBarIcon from '../ProfileBarIcon/ProfileBarIcon.component';
import './TopNav.styles.scss';

const TopNav = () => {
  return(
    <nav>
      <ul className="navbar">
        <NavLink to="/" exact activeClassName="navbar__selected">
          <li className="navbar__item">Home</li>
        </NavLink>
        <NavLink to="/movies" activeClassName="navbar__selected">
          <li className="navbar__item">Movies</li>
        </NavLink>
        <NavLink to="/tv-shows" activeClassName="navbar__selected">
          <li className="navbar__item">Tv</li>
        </NavLink>
        <NavLink to="/search" activeClassName="navbar__selected">
          <li className="navbar__item">Search</li>
        </NavLink>
        <NavLink to="/profile" activeClassName="navbar__selected">
          <ProfileBarIcon />
        </NavLink>
      </ul>
    </nav>
  )
}

export default TopNav;
