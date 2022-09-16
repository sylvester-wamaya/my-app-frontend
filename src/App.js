import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import StationList from './components/StationList'
import NewStation from './components/NewStation';
import PageNotFound from './components/PageNotFound';
import VoterList from './components/VoterList';
import StationDetails from './components/StationDetails'
import NewVoter from './components/NewVoter'


function App() {


  return (
    
  
    <div className="App">
      <Router>
      <NavBar />
      
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/stations' element={<StationList/>} />
        <Route exact path='/voters' element={<VoterList/>} />
        <Route exact path='/stations/:stationId/voters/new' element={<NewVoter/>} />
        <Route exact path='/stations/new' element={<NewStation/>} />
        <Route exact path='/stations/:id' element={<StationDetails/>} />
        <Route element={<PageNotFound/>} />
        </Routes>
        </Router>
    </div>
    
  );
}

export default App;