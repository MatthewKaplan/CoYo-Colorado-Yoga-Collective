import React, { Component } from 'react';
// import '../Styles/Main.scss';
import StudioCard from '../StudioCard/StudioCard.js';
import data from '../data.js';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(data)
    return (
      <section className="App">

      <StudioCard />
      </section>
    );
  }
}
