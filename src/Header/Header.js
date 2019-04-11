import React from 'react';
import '../Styles/_Header.scss';
import {Nav} from './Nav'

export const Header = (props) => {
  return (
    <header className="pageHeader">
      <Nav />
      <section className="banner">
        <h1 className="coyoHeading">
          <div className="headingText coHeadingText">CO</div>
          <div className="headingText yoHeadingText">YO</div>
        </h1>
        <h2 className="fullNameHeading">colorado yoga collective</h2>
      </section>
      <section className="temp">
      </section>
    </header>
  )
}  