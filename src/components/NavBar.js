import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <NavLink className="navbar_link" to="/">Home</NavLink>
      <NavLink className="navbar_link" to="/stations">Stations</NavLink>
      <NavLink className="navbar_link" to="/voters">Voters</NavLink>
      <NavLink className="navbar_link" to="/stations/new">Add New Station</NavLink>
    </div>
  )
}

export default NavBar
