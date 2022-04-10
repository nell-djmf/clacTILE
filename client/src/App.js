import './App.css';
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Homepage from './components/Homepage.jsx'
import Navbar from './components/Navbar';
import CaseList from './components/CaseList'
import KeycapList from './components/KeycapList'
import SwitchList from './components/SwitchList'
import BuildList from './components/BuildList';


const App = () => {
  
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const res = await axios.get('http://localhost:3001/users')
      console.log(res.data[0].name)
      setUsers(res.data[0].name)
    }

    useEffect(() => {
      getUsers()
    }, [])
    

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/api/builds" element={ <BuildList 
          users={users}
          /> } />
          <Route path="/api/cases" element={ <CaseList /> } />
          <Route path="/api/keycaps" element={ <KeycapList  /> } />
          <Route path="/api/switches" element={ <SwitchList  /> } />
        </Routes>
      </main>
    </div>
  )

}

export default App;
