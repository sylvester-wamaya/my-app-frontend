import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



const NewVoter = () => {
  const [station, setStation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState("")
  const navigate = useNavigate();
  const { stationId } = useParams();


  useEffect(() => {
    const loadStation = async () => {
      const resp = await fetch(`http://localhost:9292/stations/${stationId}`)
      const data = await resp.json();
      setStation(data);
      setLoading(false);
    }
    loadStation();
  }, [stationId])

  if (loading) { return <h3>Loading...</h3> };


  const handleChange = e => {
    setState(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const data = {name: state}
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(data)
    }
    // debugger
    await fetch(`http://localhost:9292/stations/${stationId}/voters`, options)
    navigate(`/stations/${stationId}`);
  }

  return (
    <div>
      <h3>Create Voter for {station.name}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" value={state} onChange={handleChange} autoFocus={true} />
        <br />
        <br />
        <input type="submit" value="Enter Voter" />
      </form>
    </div>
  )
}

export default NewVoter


