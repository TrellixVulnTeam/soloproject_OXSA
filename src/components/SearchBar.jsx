import React from 'react';

function SearchBar(props) {
  return (
    <div>
      <label for="searchBar">Search for an organization:</label>
      <input
        type="text"
        id="searchBar"
        name="searchBar"
        onSubmit={props.search}
      ></input>
    </div>
  );
}

export default SearchBar;
