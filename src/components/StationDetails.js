import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import VoterCard from './VoterCard';

const StationDetails = () => {
  const [station, setStation] = useState([]);
  const { id } = useParams();
  const [load, setLoad] = useState(true)

  useEffect(() => {
    const loadStations = async () => {
      const resp = await fetch(`http://localhost:9292/stations/${id}`)
      const data = await resp.json();

      setStation(data);
      setLoad(false);
    }
    loadStations();
  }, [id])

  if (load) {
    return <h3>Loading...</h3>
  } else {

    const removeVoter = id => {
      setStation({
        ...station,
        voters: station.voters.filter(voter => voter.id !== id)
      })
    }

    const deleteVoter = async id => {
      await fetch(`http://localhost:9292/voters/${id}`, {method: "DELETE"})
      removeVoter(id);
    }

    const voterCards = station.voters.map((voter, index) => <VoterCard key={index} voter={voter} deleteVoter={deleteVoter} station={station} />)


    return (
      <div>
        <h1>Station Details</h1>
        <h3>{station.name}</h3>
        {voterCards}
        <h4>Or add a new voter below.</h4>
        <p><NavLink to={`/stations/${station.id}/voters/new`}>Add Voter</NavLink></p>
      </div>
    )
  }
}

export default StationDetails
