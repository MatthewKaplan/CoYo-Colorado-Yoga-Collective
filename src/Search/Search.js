import React, { Component } from "react";
import '../Styles/Search.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    }
  }

  handleInput = (e) => {
    this.setState({
      searchQuery: e.target.value
    })
  }

  findMatchingStudio = (query) => {
    return this.props.studios.filter((studio) => { 
      let studioName = studio.name.toUpperCase();
      return studioName.match(query);
   })
  }

  handleInputChange = (e) => {
    e.preventDefault()
    let userInput = this.state.searchQuery.trim().toUpperCase();
    let result = this.findMatchingStudio(userInput);

    this.props.storeRendered(result)
  }

  displayAllStudios = (e) => {
    e.preventDefault()
    this.props.storeRendered(this.props.studios)
  }

  priceFilter = () => {
    let ordered = this.props.studios.sort((a, b) => (a.dropInFee > b.dropInFee) ? 1 : -1);
    let lastElement = ordered.pop();
    return ordered.unshift(lastElement);
  }

  sortPrice = (e) => {
    e.preventDefault()
    let filteredPrice = this.priceFilter();
    
    this.props.storeRendered(filteredPrice);
  }

  render() {
    return (
      <section className="searchStudioContainer">
        <form className="searchStudio" onSubmit={this.handleInputChange}>
          <input 
            type='text'
            placeholder="Search By Studio Name"
            value={this.state.searchQuery}
            onChange={this.handleInput}
            className="studioSearch" 
          />
        </form>
          {/* Buttons below need to be moved into Controls.js */}
          <section className='btnContainer'>
            <input 
            value='Show all studios'
            type='submit'
            onClick={this.displayAllStudios}
            className='showAll'
            />
            <input
            value='Sort by price' 
            type='submit'
            onClick={this.sortPrice}
            className='sort'
            />
          </section>
      </section>
    );
  }
}

export default Search;