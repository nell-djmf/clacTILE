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


  const [users, setUsers] = useState([])
  const [cases, setCases] = useState([])
  const [keycaps, setKeycaps] = useState([])
  const [switches, setSwitches] = useState([])

  const getUsers = async () => {
    const res = await axios.get('http://localhost:3001/users')
    console.log(res.data)
    setUsers(res.data)
  }

  const getCases = async () => {
    const res = await axios.get('http://localhost:3001/cases')
    console.log(res.data)
    setCases(res.data)
  }

  const getKeycaps = async () => {
    const res = await axios.get('http://localhost:3001/keycaps')
    console.log(res.data)
    setKeycaps(res.data)
  }

  const getSwitches = async () => {
    const res = await axios.get('http://localhost:3001/switches')
    console.log(res.data)
    setSwitches(res.data)
  }

  // getCases()
  // getKeycaps()
  // getSwitches()
  // getUsers()

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/users" element={ <UserList users={ users } /> } />
          <Route path="/cases" element={ <CaseList cases={ cases }/> } />
          <Route path="/keycaps" element={ <KeycapList  keycaps={ keycaps } /> } />
          <Route path="/switches" element={ <SwitchList switches={ switches } /> } />
        </Routes>
      </main>
    </div>
  )

}

export default App;
