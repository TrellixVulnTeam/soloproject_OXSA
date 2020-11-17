import React, { Component } from 'react';

class FollowedContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { placeholder: "i'll fill this later" };
    // remember to bind functions here
  }

  render() {
    return <div>Followed Elements will appear here</div>;
  }
}

export default FollowedContainer;
