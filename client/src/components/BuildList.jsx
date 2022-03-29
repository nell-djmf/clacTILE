import Build from "./Build"
import { useState, useEffect } from 'react'
import axios from 'axios'

const BuildList = (props) => {

    const [builds, setBuilds] = useState([])


    const getBuilds = async () => {
        const res = await axios.get('http://localhost:3001/builds')
        console.log(res.data)
        setBuilds(res.data)
    }

    useEffect(() => {
        getBuilds()
      }, [])

  
      return (
          <div className="build-container">
              <h1>Builds</h1>
              <ul>
                  { builds.map((buildItem) => (
                      <Build
                      key={ buildItem.name } 
                      name={ buildItem.name }
                      case={ buildItem.case_id }
                      keycap={ buildItem.keycap_id }
                      switch={ buildItem.switch_id }                  
                      />
                  ))
                  }
              </ul>
          </div>
      )
  }
  
  export default BuildList