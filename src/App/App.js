import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Carousel from '../Carousel/Carousel.js';
import Studios from '../Studios/Studios.js';
import Search from '../Search/Search.js';

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

  handleSearch = (searchQuery) => {
    const results = [];
    let query = searchQuery.toLowerCase();
  
    let matchingStudios = this.state.studios.filter(studio => studio.name.toLowerCase().includes(query));
    matchingStudios.forEach(match => results.push(match));
    this.setState(
      {
        searchResults: results
      },
      console.log('line44 search results: ', this.state.searchResults)
    );
  }

  render() {
    console.log(this.state)
    return (
      <section className="App">
        <Header />
        <Carousel yogaTypes={this.state.yogaTypes}/>
        <Search 
        handleSearch={this.handleSearch}
        studios={this.state.studios}
        />
        <Studios studios={this.state.studios}/>
      </section>
    );
    
  }
}
