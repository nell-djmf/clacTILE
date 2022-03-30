import Switch from "./Switch"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SwitchList = (props) => {

    const [switches, setSwitches] = useState([])

    const getSwitches = async () => {
        const res = await axios.get('http://localhost:3001/switches')
        setSwitches(res.data)
    }

    useEffect(() => {
        getSwitches()
      }, [])

    let navigate = useNavigate()




    const addSwitch = (e) => {
        localStorage.setItem('switch', e.target.innerHTML)
        console.log(localStorage)
        navigate(`/builds`)
    }

  
      return (
          <div className="switch-container">
              <h1>Switches</h1>
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