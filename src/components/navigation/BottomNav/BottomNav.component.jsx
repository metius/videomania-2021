import React from 'react';
import './BottomNav.styles.scss';

const BottomNav = () => {
  return(
    <nav className="bottom-nav">
    <ul className="bottom-nav__container">
      <a href="/" className="bottom-nav__item">
        <li className="bottom-nav__icon">
          <i className="fas fa-home"></i>
          <span className="bottom-nav__text">Home</span>
        </li>
      </a>
      <a href="card-page.html" className="bottom-nav__item">
        <li className="bottom-nav__icon">
          <i className="fas fa-film"></i>
          <span className="bottom-nav__text">Movies</span>
        </li>
      </a>
      <a href="tv.html" className="bottom-nav__item">
        <li className="bottom-nav__icon">
          <i className="fas fa-tv"></i>
        <span className="bottom-nav__text">TV</span>
        </li>
      </a>
      <a href="sign-in.html" className="bottom-nav__item">
        <li className="bottom-nav__icon">
          <i className="fas fa-user-alt"></i>
          <span className="bottom-nav__text">Profile</span>
        </li>
      </a>
      <a href="/search.html" className="bottom-nav__item">
        <li className="bottom-nav__icon">
          <i className="fas fa-search"></i>
          <span className="bottom-nav__text">Search</span>
        </li>
      </a>
    </ul>
  </nav>
  )
}

export default BottomNav;