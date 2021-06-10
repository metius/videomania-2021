import React, {Component} from 'react';
import LogoVideomania from './logos/LogoVideomania/LogoVideomania.component';
import LogoTMDB from './logos/LogoTMDB/LogoTMDB.component';
import TopNav from '../navigation/TopNav/TopNav.component';
import './Header.styles.scss';

class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {
      prevScrollPop: 0,
      visible: true,
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const {prevScrollPop, visible} = this.state;
    const currentScroll = window.pageYOffset;
    console.log(prevScrollPop)

    if((prevScrollPop > currentScroll && prevScrollPop - currentScroll > 40) || currentScroll < 10) {
      console.log('we hide')
      this.setState({
        prevScrollPop: currentScroll,
        visible: !visible,
      })
    } else {
      this.setState({
        visible: !visible,
    })}
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  render() {
    const {visible} = this.state;
    return(
      <header className={`header ${visible ? '' : 'header--hidden'}`}>
        <div className='logo'>
          <LogoVideomania />
          <LogoTMDB />
        </div>
        <TopNav />
      </header>
    )
  }
}

// const Header = () => {
//   return(
//     <header>
//       <div className='logo'>
//         <LogoVideomania />
//         <LogoTMDB />
//       </div>
//       <TopNav />
//     </header>
//   )
// }

export default Header;