import React from 'react';

function ViewPanel(props) {
  return (
    <div className="display">
      <h3>{props.currentView.orgname}</h3>
      <h4>Total contributions: {props.currentView.total}</h4>
      <p>Total from individuals: {props.currentView.indivs}</p>
      <p>Total PAC's: {props.currentView.pacs}</p>
      <h4> Lobbying Spend</h4>
      <p>{props.currentView.lobbying}</p>
    </div>
  );
}

export default ViewPanel;
