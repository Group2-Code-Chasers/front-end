import React from 'react';

const Leaderboard = (props) => {
  return (
    <div>
      <h2>Leaderboard</h2>
      <p>Score: {props.score}</p>
      {/* Render the leaderboard content */}
    </div>
  );
};

export default Leaderboard;