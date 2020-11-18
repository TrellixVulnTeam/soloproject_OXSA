import React, { Component } from 'react';
import FollowedWindow from './FollowedWindow.jsx';
import SearchWindow from './SearchWindow.jsx';

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
          orgname: 'UoA',
          total: 10000000000,
          indivs: 500000,
          pacs: 8000000000,
          lobbying: 20000000,
        },
      ],

      searchValue: '',
      searchResults: [{ orgname: 'Goldman', orgid: 18 }],
      currentView: {
        orgname: 'Goldman',
        total: 10,
        indivs: 20,
        pacs: 30,
        lobbying: 40,
      },
    };

    this.search = this.search.bind(this);
  }

  componentDidMount() {
    console.log('component did mount...');
    fetch('/api/followed')
      .then((response) => response.json())
      .then((data) => {
        // this.setState({
        // ...this.state,
        //   followed: data,
        // });
        console.log('data includes', data);
      });
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
  //       this.setState({ ...this.state, followed: previousFollowed });
  //     })
  //     .catch((err) => {
  //       console.log('Error in componentDidMount ', err);
  //     });
  // }

  search(event) {
    console.log('running search');
    this.setState({
      ...this.state,
      searchValue: event.target.value,
    });
    fetch(
      `https://www.opensecrets.org/api/?method=getOrgs&org=${event.target.value}&apikey=ec28c1becea1b97abf538afe264e40d1&output=json`
    )
      .then((response) => {
        response.json();
      })
      .then((results) => {
        console.log(results);
      });
  }

  // follow() {}

  // unfollow() {}

  render() {
    return (
      <div>
        <h2>Followed</h2>
        <FollowedWindow className="window" followed={this.state.followed} />

        <h2>Search Results:</h2>

        <SearchWindow
          className="window"
          searchResults={this.state.searchResults}
          searchValue={this.state.searchValue}
          search={this.search}
          currentView={this.state.currentView}
        />
      </div>
    );
  }
}

export default App;
