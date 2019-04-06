import React from 'react';
import '../Styles/Nav.scss';
import logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Nav(props) {
  return (
    <nav className="navBar">
      <div className="logo">
        <a href="#home" className="logoLink"> <img src={logo} alt="CoYo Logo" className="logoImg"/></a>
      </div>
      <ul className="navList">
        <li className="facebook socialMedia">
         <a href="https://www.facebook.com">
          <FontAwesomeIcon icon={['fab', 'facebook-square']} />
         </a>
        </li>
        <li className="twitter socialMedia">
         <a href="www.twitter.com">
          <FontAwesomeIcon icon={['fab', 'twitter']} />
         </a>
        </li>
        <li className="instagram socialMedia">
         <a href="www.instagram.com">
          <FontAwesomeIcon icon={['fab', 'instagram']} />
         </a>
        </li>
      </ul>
    </nav>
  )
}