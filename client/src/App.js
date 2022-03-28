import './App.css';
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage.jsx'

const App = () => {


  return (
    <div className="App">
      <header>
        {/* Import Nav here */}
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Homepage /> } />
        </Routes>
      </main>
    </div>
  )

}

export default App;
