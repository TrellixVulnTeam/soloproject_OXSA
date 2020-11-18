import React from 'react';

function ResultLine(props) {
  return (
    <div className="resultline">
      <p>Organization Name: ${props.orgname}</p>
    </div>
  );
}

export default ResultLine;
