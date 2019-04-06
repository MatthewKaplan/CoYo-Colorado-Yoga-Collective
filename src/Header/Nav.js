import React from 'react';
import '../Styles/Nav.scss';
import logo from './logo.png'


{/* <nav className="navBar">home</nav> */}


export default function Nav(props) {
  return (
    <nav className="navBar">
      <ul className="navList">
        <li className="logo">
          <a href="#home" class="logoLink"><img src={logo} alt="CoYo Logo" className="logoImg"/></a>
        </li>  
        <li>
          <i class="fas fa-twitter"></i>
        </li>
        <li>
          <i class="fas fa-facebook"></i>
        </li>
        <li>
          <i class="fas fa-instagram"></i>
        </li>
      </ul>
    </nav>
  )
}