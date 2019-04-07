import React, { Component } from "react";
import '../Styles/Search.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    }
  }

  handleInputChange = () => {
    this.setState({
      searchQuery: this.search.value
    }, this.props.handleSearch(this.state.searchQuery));
  }

  render() {
    return (
      <section className="searchStudioContainer">
        <form className="searchStudio">
          <input 
            placeholder="Search By Studio Name"
            ref={input => this.search = input} 
            onChange={this.handleInputChange}
            className="studioSearch" 
          />
          </form>
          {/* Buttons below need to be moved into Controls.js */}
          <section className='btnContainer'>
            <input 
            value='Show all studios'
            type='submit'
            className='showAll'
            />
            <input
            value='Sort by price' 
            type='submit'
            className='sort'
            />
          </section>
      </section>
    );
  }
}

export default Search;
