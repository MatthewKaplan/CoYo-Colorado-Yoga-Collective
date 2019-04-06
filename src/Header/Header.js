import React, { Component } from 'react';
import '../Styles/Header.scss';
import Nav from './Nav'

export default function Header(props) {
  return (
    <header className="banner">
      <Nav />
      <h1 className="coyoHeading">
        <div className="headingText co">CO</div>
        <div className="headingText yo">YO</div>
        <div className="headingText coyoHeading">Colorado Yoga</div>
      </h1>
    </header>
  )
}  