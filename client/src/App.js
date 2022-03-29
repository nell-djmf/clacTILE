import './App.css';
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Homepage from './components/Homepage.jsx'
import Navbar from './components/Navbar';
import UserList from './components/UserList'
import CaseList from './components/CaseList'
import KeycapList from './components/KeycapList'
import SwitchList from './components/SwitchList'

const App = () => {

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/users" element={ <UserList /> } />
          <Route path="/cases" element={ <CaseList /> } />
          <Route path="/keycaps" element={ <KeycapList  /> } />
          <Route path="/switches" element={ <SwitchList /> } />
        </Routes>
      </main>
    </div>
  )

}

export default App;
