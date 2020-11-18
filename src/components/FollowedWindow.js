import React from 'react';
import FollowDisplay from './FollowDisplay';

function FollowedWindow(props) {
  let followed = props.followed;

  followed = followed.map((follower, i) => {
    return (
      <FollowDisplay
        orgname={follower.orgname}
        total={follower.total}
        indivs={follower.indivs}
        pacs={follower.pacs}
        lobbying={follower.lobbying}
        key={i}
      />
    );
  });

  return <div className="window">{followed}</div>;
}

export default FollowedWindow;
