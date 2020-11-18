import React, { Component } from 'react';
import FollowedWindow from './FollowedWindow';
import SearchWindow from './SearchWindow';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followed: [
        {
          orgname: 'Goldman',
          total: 10000000000,
          indivs: 500000,
          pacs: 8000000000,
          lobbying: 20000000,
        },
        {
          orgname: 'General Eletric',
          total: 2578078,
          indivs: 1195973,
          pacs: 1360500,
          lobbying: 5640000,
        },
        {
          orgname: 'University of Alabama',
          total: 9087772,
          indivs: 463910,
          pacs: 745003500,
          lobbying: 500000,
        },
      ],
      searched: [],
    };
    // remember to bind functions here
  }

  // componentDidMount() {
  //   fetch(
  //     'http://www.opensecrets.org/api/?method=orgSummary&id=D000000125&apikey=ec28c1becea1b97abf538afe264e40d1&output=json'
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const org = data.response.organization['@attributes'];
  //       const previousFollowed = this.state.followed.slice();
  //       const follower = {
  //         orgname: org.orgname,
  //         total: org.total,
  //         pacs: org.pacs,
  //         indivs: org.indivs,
  //       };
  //       console.log(follower);
  //       previousFollowed.push(follower);
  //       this.setState({ followed: previousFollowed });
  //     })
  //     .catch((err) => {
  //       console.log('Error in componentDidMount ', err);
  //     });
  // }

  render() {
    return (
      <div>
        This is the app component rendering!
        <h2>Followed</h2>
        <FollowedWindow className="window" followed={this.state.followed} />
        <h2>Search Results:</h2>
        <SearchWindow className="window" searched={this.state.searched} />
      </div>
    );
  }
}

export default App;
