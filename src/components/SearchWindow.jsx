import React from 'react';
import SearchBar from './SearchBar.jsx';
import ViewPanel from './ViewPanel.jsx';
import SearchResults from './SearchResults.jsx';

function SearchWindow(props) {
  return (
    <div className="window">
      <div>
        <SearchBar search={props.search}>
          Explore window will appear here
        </SearchBar>
        <SearchResults searchResults={props.searchResults}></SearchResults>
      </div>
      <div>
        <ViewPanel currentView={props.currentView}></ViewPanel>
      </div>
    </div>
  );
}

export default SearchWindow;
