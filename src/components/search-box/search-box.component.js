import { Component } from "react";
import "./search-box.styles.css";

const SearchBox = ({ onChangeHandler, placeholder, className }) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};
export default SearchBox;
