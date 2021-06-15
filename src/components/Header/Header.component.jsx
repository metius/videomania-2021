import React from 'react';
import LogoVideomania from '../logos/LogoVideomania/LogoVideomania.component';
import TopNav from '../navigation/TopNav/TopNav.component';
import './Header.styles.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false,
    }

    this.changeBackground = this.changeBackground.bind(this);
  }

  changeBackground() {
    if(window.scrollY >= 30) {
      this.setState({scrolled: true})
    } else {
      this.setState({scrolled: false})
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.changeBackground)
  }

  componentWillUnmount(){
    window.removeEventListener("scroll", this.changeBackground);
  }

  render() {
    const {scrolled} = this.state;
    return(
      <header className={scrolled ? 'header__background' : ''}>
        <div className='header'>
          <div className='logo'>
            <div className="logo__videomania">
              <LogoVideomania />
            </div>
            {/* <HeaderLogoTMDB /> */}
            <TopNav />
          </div>
        </div>
      </header>
    )
  }
}

export default Header;