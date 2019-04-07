import React, { Component } from "react";
import "../Styles/Search.scss";

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
    }, this.props.updateResults(this.state.searchQuery));
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
      </section>
    );
  }
}

export default Search;
