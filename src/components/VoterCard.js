import React from 'react';

const VoterCard = ({voter, station, deleteVoter}) => {
  return (
    <li>
      {voter.name} from {station.name} <button onClick={() => deleteVoter(voter.id)}>Delete</button>
    </li>
  )
}

export default VoterCard
