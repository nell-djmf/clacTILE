import Build from "./Build"
import { useState, useEffect } from 'react'
import axios from 'axios'




const ListDetail = (props) => {

    const [builds, setBuilds] = useState([])


    const getBuilds = async () => {
        const res = await axios.get(`http://localhost:3001/users/${props.name}`)
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
                      case={ buildItem.case_id.name }
                      keycap={ buildItem.keycap_id.name }
                      switch={ buildItem.switch_id.name }                  
                      />
                  ))
                  }
              </ul>
          </div>
      )
  }
  
  export default ListDetail