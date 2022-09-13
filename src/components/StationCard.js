import React from 'react'
import { NavLink } from 'react-router-dom'

const StationCard = ({ station, deleteStation }) => {
  return (
    <li>
      <NavLink to={`/stations/${station.id}`}>{station.name}</NavLink> - <button onClick={() => deleteStation(station.id)}>Delete</button>
    </li>
  )
}

export default StationCard
