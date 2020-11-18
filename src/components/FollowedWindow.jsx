import React from 'react';
import FollowDisplay from './FollowDisplay.jsx';

function FollowedWindow(props) {
  let followed = props.followed;
  // for (let key of Object.keys(props.followed)) {
  //   followed.push(props.followed[key]);
  // }

  followed = followed.map((follower, i) => {
    return (
      <FollowDisplay
        orgname={follower.orgname}
        total={follower.total}
        indivs={follower.indivs}
        pacs={follower.pacs}
        lobbying={follower.lobbying}
        key={`followDisplay${i}`}
      />
    );
  });
  console.log(followed);
  return <div className="window">{followed}</div>;
}

export default FollowedWindow;
