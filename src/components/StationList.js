import React, { useEffect, useState } from 'react'
import StationCard from './StationCard'

const StationList = () => {
  const [stations, setStations] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadStations = async () => {
      const resp = await fetch('http://localhost:9292/stations')
      const data = await resp.json();
      setStations(data)
      setLoading(false)
    }
    loadStations();
  }, [])

  const removeStation = id => {
    setStations(stations.filter(station => station.id !== id))
  }


  const deleteStation = async id => {
    await fetch(`http://localhost:9292/stations/${id}`, { method: "DELETE" })
    removeStation(id);
  }

  if(loading) {return <h3>Loading...</h3>}

  const stationCard = stations.map((station, index) => <StationCard key={index} station={station} deleteStation={deleteStation} />)

  return (
    <div>
      <h1>Here are your stations!</h1>
      {stationCard}
      {/* <h4>Click on a show to see the characters or add a new one.</h4> */}
    </div>
  )
}

export default StationList
