import Keycap from "./Keycap"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const KeycapList = (props) => {

    const [keycaps, setKeycaps] = useState([])


    const getKeycaps = async () => {
        const res = await axios.get('http://localhost:3001/keycaps')
        setKeycaps(res.data)
    }

    useEffect(() => {
        getKeycaps()
      }, [])

    let navigate = useNavigate()

    const addKeycap = (e) => {
        localStorage.setItem('keycap', e.target.innerHTML)
        console.log(localStorage)
        navigate(`/switches`)
    }


  
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
                      id={keycapItem._id}
                      addKeycap={addKeycap}                  
                      />
                  ))
                  }
              </ul>
          </div>
      )
  }
  
  export default KeycapList