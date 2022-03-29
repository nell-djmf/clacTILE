import Switch from "./Switch"
import { useState, useEffect } from 'react'
import axios from 'axios'

const SwitchList = (props) => {

    const [switches, setSwitches] = useState([])

    const getSwitches = async () => {
        const res = await axios.get('http://localhost:3001/switches')
        console.log(res.data)
        setSwitches(res.data)
    }

    useEffect(() => {
        getSwitches()
      }, [])

  
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
                      />
                    ))
                  }
              </ul>
          </div>
      )
}
  
  export default SwitchList