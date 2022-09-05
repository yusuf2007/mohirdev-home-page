import React from "react";
import "../css/App.css";

const SearchBar = (props) => {
  return (
    <div className="search">
      <input type="text" placeholder="O‘zingizga kerakli e’lonni qidiring" />
      <i class="fa fa-search search-icon" aria-hidden="true"></i>
    </div>
  );
};

export default SearchBar;
