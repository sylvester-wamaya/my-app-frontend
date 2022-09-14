import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const NewStation= () => {
  const [name, setName] = useState("")
  const navigate = useNavigate();

  const handleChange = e => {
    setName(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault();
  
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    const body = { name: name }
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }
    await fetch('http://localhost:9292/stations', options)
    
    navigate("/stations");
  }


  return (
    <div>
      <h1>Add a new station here.</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={name} onChange={handleChange} autoFocus={true} />
        </div>
        <br />
        <input type="submit" value="Enter Station" />
      </form>
    </div>
  )
}

export default NewStation
