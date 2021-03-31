import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFilm, faTv, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import './BottomNav.styles.scss';

const BottomNav = () => {
  return(
    <nav className="bottom-nav">
      <ul className="bottom-nav__container">
        <Link to="/" className="bottom-nav__item">
          <li className="bottom-nav__icon">
            <FontAwesomeIcon icon={faHome} />
            <span className="bottom-nav__text">Home</span>
          </li>
        </Link>
        <Link to="/movies" className="bottom-nav__item">
          <li className="bottom-nav__icon">
            <FontAwesomeIcon icon={faFilm} />
            <span className="bottom-nav__text">Movies</span>
          </li>
        </Link>
        <Link to="/tv-shows" className="bottom-nav__item">
          <li className="bottom-nav__icon">
            <FontAwesomeIcon icon={faTv} />
          <span className="bottom-nav__text">TV</span>
          </li>
        </Link>
        <Link to="/profile" className="bottom-nav__item">
          <li className="bottom-nav__icon">
            <FontAwesomeIcon icon={faUser} />
            <span className="bottom-nav__text">Profile</span>
          </li>
        </Link>
        <Link to="/search" className="bottom-nav__item">
          <li className="bottom-nav__icon">
            <FontAwesomeIcon icon={faSearch} />
            <span className="bottom-nav__text">Search</span>
          </li>
        </Link>
      </ul>
    </nav>
  )
}

export default BottomNav;