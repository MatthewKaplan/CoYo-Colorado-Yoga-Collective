import React, { Component } from 'react';
import '../Styles/Header.scss';

export default function TriviaList(props) {
  return (
    <header className="banner">
      <nav className="navBar">home</nav>
      <h1 className="coyoHeading">
        <div className="headingText co">CO</div>
        <div className="headingText yo">YO</div>
        <div className="headingText coyoHeading">Colorado Yoga</div>
      </h1>
    </header>
  )
}  