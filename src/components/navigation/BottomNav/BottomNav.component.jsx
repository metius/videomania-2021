import React from 'react';
import { NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFilm, faTv, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import './BottomNav.styles.scss';

const BottomNav = () => {
  return(
    <nav className="bottom-nav">
      <ul className="bottom-nav__container">
        <NavLink to="/" exact className="bottom-nav__item" activeClassName="bottom-nav__item--box">
          
          <li className="bottom-nav__icon">
            <FontAwesomeIcon icon={faHome} />
            <span className="bottom-nav__text">Home</span>
          </li>
          
        </NavLink>
        <NavLink to="/movies" className="bottom-nav__item" activeClassName="bottom-nav__item--box">
          <li className="bottom-nav__icon">
            <FontAwesomeIcon icon={faFilm} />
            <span className="bottom-nav__text">Movies</span>
          </li>
        </NavLink>
        <NavLink to="/tv-shows" className="bottom-nav__item" activeClassName="bottom-nav__item--box">
          <li className="bottom-nav__icon">
            <FontAwesomeIcon icon={faTv} />
            <span className="bottom-nav__text">TV</span>
          </li>
        </NavLink>
        <NavLink to="/search" className="bottom-nav__item" activeClassName="bottom-nav__item--box">
          <li className="bottom-nav__icon">
            <FontAwesomeIcon icon={faSearch} />
            <span className="bottom-nav__text">Search</span>
          </li>
        </NavLink>
        <NavLink to="/profile" className="bottom-nav__item" activeClassName="bottom-nav__item--box">
          <li className="bottom-nav__icon">
            <FontAwesomeIcon icon={faUser} />
            <span className="bottom-nav__text">Profile</span>
          </li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default BottomNav;