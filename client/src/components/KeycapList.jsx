import Keycap from "./Keycap"
import { useState, useEffect } from 'react'
import axios from 'axios'

const KeycapList = (props) => {

    const [keycaps, setKeycaps] = useState([])


    const getKeycaps = async () => {
        const res = await axios.get('http://localhost:3001/keycaps')
        console.log(res.data)
        setKeycaps(res.data)
    }

    useEffect(() => {
        getKeycaps()
      }, [])

  
      return (
          <div className="keycap-container">
              <h1>Keycaps</h1>
              <ul>
                  { keycaps.map((keycapItem) => (
                      <Keycap
                      key={ keycapItem.name } 
                      name={ keycapItem.name }
                      profile={ keycapItem.profile }
                      material={ keycapItem.material }
                      lettering={ keycapItem.lettering }
                      color={ keycapItem.color }                  
                      />
                  ))
                  }
              </ul>
          </div>
      )
  }
  
  export default KeycapList