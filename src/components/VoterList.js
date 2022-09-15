import React, { useState, useEffect } from 'react'
import VoterCard from './VoterCard'



const VoterList = () => {
  const [voters, setVoters] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVoters = async () => {
      const resp = await fetch('http://localhost:9292/voters')
      const data = await resp.json();
      setVoters(data)
      setLoading(false);
    }
    loadVoters();
  }, [])
  if (loading) { return <h3>Loading...</h3> }

  const removeVoter = id => {
    setVoters(voters.filter(voter => voter.id !== id))
  }


  const deleteVoter = async id => {
    await fetch(`http://localhost:9292/voters/${id}`, { method: "DELETE" })
    removeVoter(id);
  }

  const voterCard = voters.map((voter, index) => <VoterCard key={index} voter={voter} station={voter.station} deleteVoter={deleteVoter} />)

  return (
    <div>
      <h1>Here are your stations' voters!</h1>
      {voterCard}
      {/* <p>Click a station from the Station List to add a new Voter.</p> */}
    </div>
  )
}

export default VoterList
