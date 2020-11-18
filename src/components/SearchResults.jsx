import React from 'react';
import ResultLine from './ResultLine.jsx';

function SearchResults(props) {
  const results = [];
  // props.searchResults = [{ orgname: 'test', orgid: 17 }];
  for (let result of props.searchResults) {
    results.push(
      <ResultLine
        orgname={result.orgname}
        orgid={result.orgid}
        // key={`line${i}`}
      />
    );
  }

  return <div>{results}</div>;
}

export default SearchResults;
