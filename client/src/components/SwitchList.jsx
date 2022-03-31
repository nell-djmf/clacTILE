import Switch from "./Switch"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SwitchList = (props) => {

    let navigate = useNavigate()
    const [switches, setSwitches] = useState([])
    const [search, setSearch] = useState('')
    const [isSearched, setIsSearched] = useState(false)

    const getSwitches = async () => {
        const res = await axios.get('http://localhost:3001/switches')
        setSwitches(res.data)
    }

    const getNewSwitches = async () => {
        const res = await axios.get(`http://localhost:3001/switches/${search}`)
        setSwitches(res.data)
    }
    

    useEffect(() => {
        getSwitches()
      }, [])

    useEffect(() => {
        getNewSwitches()
        setIsSearched(false)
    }, [isSearched])





    const addSwitch = (e) => {
        localStorage.setItem('switch', e.target.innerHTML)
        console.log(localStorage)
        navigate(`/builds`)
    }

  
      return (
          <div className="switch-container">
              <h1>Switches</h1>
              <div className='search'>
                    <input 
                        placeholder='search parts'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={() => setIsSearched(true)}>?</button>
                </div>
              <ul>
                  { switches.map((switchItem) => (
                      <Switch
                      key={ switchItem.name } 
                      name={ switchItem.name }
                      type={ switchItem.type }
                      actuation={ switchItem.actuation }
                      color={ switchItem.color }
                      id={switchItem._id}
                      addSwitch={addSwitch}                  
                      />
                    ))
                  }
              </ul>
          </div>
      )
}
  
  export default SwitchList