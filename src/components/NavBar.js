import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <NavLink className="navbar_link" to="/">Home</NavLink>
      <NavLink className="navbar_link" to="/shows">Stations</NavLink>
      <NavLink className="navbar_link" to="/characters">Voters</NavLink>
      <NavLink className="navbar_link" to="/shows/new">Add New Station</NavLink>
    </div>
  )
}

export default NavBar
