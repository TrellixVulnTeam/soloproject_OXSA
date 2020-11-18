import React from 'react';

function FollowDisplay(props) {
  return (
    <div className="display">
      <h3>{props.orgname}</h3>
      <h4>Total contributions: {props.total}</h4>
      <p>Total from individuals: {props.indivs}</p>
      <p>Total PAC's: {props.pacs}</p>
      <h4> Lobbying Spend</h4>
      <p>{props.lobbying}</p>
    </div>
  );
}

export default FollowDisplay;
