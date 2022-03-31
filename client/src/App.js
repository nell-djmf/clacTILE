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
import Preview from './components/Preview';

const App = () => {
  
  const [users, setUsers] = useState([])
  
  const [preview, setPreview] = useState({})
  
  const [basket, setBasket] = useState([])


  const getUsers = async () => {
    const res = await axios.get('http://localhost:3001/users')
      console.log(res.data[0].name)
      setUsers(res.data[0].name)
    }

    useEffect(() => {
      getUsers()
    }, [])


    const clearPreview = () => {
      localStorage.clear()
      console.log(localStorage)
  }
  
  const getPreviewItems = async () => {
    const res = await axios({
      url: `http://localhost:3001/preview`,
      method: 'get',
      data: {preview}
    })
    console.log(res.data)
    setBasket(res.data)
  }

  useEffect(() => {
    getPreviewItems()
    console.log(preview.case)
  }, [preview])




  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/builds" element={ <BuildList 
          users={users} preview={preview}
          /> } />
          <Route path="/cases" element={ <CaseList preview={preview} setPreview={setPreview} /> } />
          <Route path="/keycaps" element={ <KeycapList  preview={preview} setPreview={setPreview}/> } />
          <Route path="/switches" element={ <SwitchList  preview={preview} setPreview={setPreview}/> } />
        </Routes>
        <footer>
          <Preview preview={preview} setPreview={setPreview} basket={basket} setBasket={setBasket}/>
        </footer>
      </main>
    </div>
  )

}

export default App;
