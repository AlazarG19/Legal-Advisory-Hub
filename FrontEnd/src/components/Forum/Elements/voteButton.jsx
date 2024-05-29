import React, { useState } from 'react';
import { BiUpvote, BiDownvote } from 'react-icons/bi';

function VoteButtons() {
  const [votes, setVotes] = useState(0);

  const handleUpvote = () => {
    setVotes(votes + 1);
  };

  const handleDownvote = () => {
    setVotes(votes - 1);
  };

  return (
    <div>
      <button className="btn btn-link" onClick={handleUpvote}>
        <BiUpvote size={15} color="#28a745" />
      </button>
      <span>{votes}</span>
      <button className="btn btn-link" onClick={handleDownvote}>
        <BiDownvote size={15} color="#dc3545" />
      </button>
    </div>
  );
}

export default VoteButtons;