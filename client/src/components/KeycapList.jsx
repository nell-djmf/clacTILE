import Keycap from "./Keycap"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const KeycapList = (props) => {

    let navigate = useNavigate()
    const [keycaps, setKeycaps] = useState([])
    const [search, setSearch] = useState('')
    const [isSearched, setIsSearched] = useState(false)

    //GET ALL KEYCAPS
    const getKeycaps = async () => {
        const res = await axios.get('http://localhost:3001/keycaps')
        setKeycaps(res.data)
    }

    //GET SEARCHED KEYCAPS
    const getNewKeycaps = async () => {
        const res = await axios.get(`http://localhost:3001/api/keycaps/${search}`)
        setKeycaps(res.data)
    }
    
    useEffect(() => {
        getKeycaps()
      }, [])

    //Triggers re-render on search
    useEffect(() => {
        getNewKeycaps()
        setIsSearched(false)
    }, [isSearched])

    //Adds keycap id to local storage, navigates to next page
    const addKeycap = (e) => {
        localStorage.setItem('keycap', e.target.innerHTML)
        console.log(localStorage)
        navigate(`/api/switches`)
    }

  
      return (
          <div className="keycap-container">
              <h1>Keycaps</h1>
              <div className='search-container'>
                    <input 
                        placeholder='search parts'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={() => setIsSearched(true)}className='search'>✦</button>
                </div>
                 <div className="wrapper">
                  { keycaps.map((keycapItem) => (
                      <Keycap
                      key={ keycapItem.name } 
                      name={ keycapItem.name }
                      profile={ keycapItem.profile }
                      material={ keycapItem.material }
                      lettering={ keycapItem.lettering }
                      color={ keycapItem.color }
                      image={keycapItem.image}
                      id={keycapItem._id}
                      addKeycap={addKeycap}                  
                      />
                  ))
                  }
              </div>
          </div>
      )
  }
  
  export default KeycapList