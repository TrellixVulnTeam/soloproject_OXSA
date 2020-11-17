import React, { Component } from 'react';
import FollowedContainer from './FollowedContainer';
import ExploreContainer from './ExploreContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { placeholder: "i'll fill this later" };
    // remember to bind functions here
  }

  render() {
    return (
      <div>
        Made it this far!
        <ExploreContainer />
        <FollowedContainer />
      </div>
    );
  }
}

export default App;
