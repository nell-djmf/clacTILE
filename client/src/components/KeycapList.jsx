import Keycap from "./Keycap"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const KeycapList = (props) => {

    let navigate = useNavigate()
    const [keycaps, setKeycaps] = useState([])
    const [search, setSearch] = useState('')
    const [isSearched, setIsSearched] = useState(false)


    const getKeycaps = async () => {
        const res = await axios.get('http://localhost:3001/keycaps')
        console.log(res.data)
        setKeycaps(res.data)
    }

    const getNewKeycaps = async () => {
        const res = await axios.get(`http://localhost:3001/keycaps/${search}`)
        setKeycaps(res.data)
    }
    

    useEffect(() => {
        getKeycaps()
      }, [])


    useEffect(() => {
        getNewKeycaps()
        setIsSearched(false)
    }, [isSearched])


    const addKeycap = (e) => {
        localStorage.setItem('keycap', e.target.innerHTML)
        console.log(localStorage)
        navigate(`/switches`)
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