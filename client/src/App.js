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
import { useNavigate } from 'react-router-dom';
import Case from './components/Case';

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

  const [newKbuild, setNewKbuild] = useState({
    name: '',
    case_id: '',
    keycap_id: '',
    switch_id: ''
  })



  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/builds" element={ <BuildList 
          users={users}
          newKbuild={newKbuild}
          setNewKbuild={setNewKbuild}
          /> } />
          <Route path="/cases" element={ <CaseList /> } />
          <Route path="/keycaps" element={ <KeycapList  /> } />
          <Route path="/switches" element={ <SwitchList /> } />
        </Routes>
      </main>
    </div>
  )

}

export default App;
