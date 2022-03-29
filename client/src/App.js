import './App.css';
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Homepage from './components/Homepage.jsx'
import Navbar from './components/Navbar';
import UserList from './components/UserList'
import CaseList from './components/CaseList'
import KeycapList from './components/KeycapList'
import SwitchList from './components/SwitchList'
import ListDetail from './components/ListDetail';


const App = () => {

  const [users, setUsers] = useState([])

  const getUsers = async () => {
      const res = await axios.get('http://localhost:3001/users')
      console.log(res.data)
      setUsers(res.data)
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
          <Route path="/users" element={ <UserList users={users}/> } />
          <Route path="/users/Rockforce80" element={ <ListDetail name={'Rockforce80'}/> } />
          <Route path="/users/caster_class" element={ <ListDetail name={'caster_class'}/> } />
          <Route path="/cases" element={ <CaseList /> } />
          <Route path="/keycaps" element={ <KeycapList  /> } />
          <Route path="/switches" element={ <SwitchList /> } />
        </Routes>
      </main>
    </div>
  )

}

export default App;
