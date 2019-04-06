import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Carousel from '../Carousel/Carousel.js';
import TypeCard from '../TypeCard/TypeCard.js';
import search from '../Search/SearchFunction.js';
import SearchBar from '../Search/SearchBar.js';
import Studios from '../Studios/Studios.js';


import '../Styles/Main.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: [],
      studios: [],
      yogaTypes: []
    };
  }

  componentDidMount(){
    fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/SallyHaefling/studios')
      .then(response => response.json())
      .then(yogaStudios => this.setState( {studios: yogaStudios.studios} ))
      .catch(err => console.log(err))
    fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/SallyHaefling/yoga')
      .then(response => response.json())
      .then(yogaTypes => this.setState( {yogaTypes: yogaTypes.yoga.types}))
      .catch(err => console.log(err))
  }

  updateResults = query => {
    this.setState(
      {
        searchResults: search(query)
      },
      console.log(this.state.searchResults)
    );
  };

  render() {
    console.log(this.state)
    return (
      <section className="App">
        <Header />
        <Carousel yogaTypes={this.state.yogaTypes}/>
        <SearchBar updateResults={this.updateResults} />
        <Studios />
      </section>
    );
    
  }
}
