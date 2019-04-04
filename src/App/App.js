import React, { Component } from 'react';
import Studios from '../Studios/Studios.js';
import search from '../Search/SearchFunction.js';
import SearchBar from '../Search/SearchBar.js';
import Type from '../Type/Type.js';
import '../Styles/Main.scss';
import data from '../data.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: []
    };
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
    return (
      <section className="App">
      <SearchBar updateResults={this.updateResults} />
        <Type />
        <Studios />
      </section>
    );
    
  }
}
