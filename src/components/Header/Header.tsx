import * as React from 'react';
import Logo from '../../assets/images/headerLogo.png';
import './header.scss';

const Header = () => {
  return <div className="header-container">
    <div className="logo-container">
      <img className="logo-image" src={Logo}/>
    </div>
    <div className="navigation-container">
      <nav className="navigation">
        <a className="navigation-button" href="/">HOME</a>
        <a className="navigation-button" href="/units">UNITS</a>
      </nav>
    </div>
  </div>
}

export default Header;