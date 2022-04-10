import Switch from "./Switch"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SwitchList = (props) => {

    let navigate = useNavigate()
    const [switches, setSwitches] = useState([])
    const [search, setSearch] = useState('')
    const [isSearched, setIsSearched] = useState(false)

    //GET ALL SWITCHES
    const getSwitches = async () => {
        const res = await axios.get('http://localhost:3001/api/switches')
        setSwitches(res.data)
    }

    //GET SEARCHED SWITCHES
    const getNewSwitches = async () => {
        const res = await axios.get(`http://localhost:3001/api/switches/${search}`)
        setSwitches(res.data)
    }
    
    useEffect(() => {
        getSwitches()
      }, [])

    //Triggers re-render on search
    useEffect(() => {
        getNewSwitches()
        setIsSearched(false)
    }, [isSearched])

    //Adds switch id to local storage, sends you back to build page
    const addSwitch = (e) => {
        localStorage.setItem('switch', e.target.innerHTML)
        navigate(`/builds`)
    }

    
      return (
          <div className="switch-container">
              <h1>Switches</h1>
              <div className='search-container'>
                    <input 
                        placeholder='search parts'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={() => setIsSearched(true)} className='search'>✦</button>
                </div>
              <div className="wrapper">
                  { switches.map((switchItem) => (
                      <Switch
                      key={ switchItem.name } 
                      name={ switchItem.name }
                      type={ switchItem.type }
                      actuation={ switchItem.actuation }
                      color={ switchItem.color }
                      image={switchItem.image}
                      id={switchItem._id}
                      addSwitch={addSwitch}                  
                      />
                    ))
                  }
              </div>
          </div>
      )
}
  
  export default SwitchList