import React from "react";
import Search from "./Search";

const SearchBar = (props) => {
  return (
    <section className="SearchBar">
      <Search 
        updateResults={props.updateResults}/>
    </section>
  );
};

export default SearchBar;