
import Build from "./Build"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




const BuildList = (props) => {

    //GET BOARDS
    const [builds, setBuilds] = useState([])
    const [highlight, setHighlight] = useState([])
    const [change, setChange] = useState(false)


    const getBuilds = async () => {
        const res = await axios.get(`http://localhost:3001/builds`)
        console.log(res.data)
        setBuilds(res.data)
    }

    useEffect(() => {
        getBuilds()
      }, [])


      
      
      
    //ADD BOARD
    let buildName = ''
      
    const addNewBuild = async () => {
        buildName = prompt('Name your build')
        await axios.post(`http://localhost:3001/builds/create`, { 
            name: buildName, 
            case_id: localStorage.getItem('case'), 
            keycap_id: localStorage.getItem('keycap'), 
            switch_id: localStorage.getItem('switch') 
        })
        localStorage.clear()
        setChange(true)
    }


    let navigate = useNavigate()
    const buildBoard = (e) => {
      navigate(`/cases`)
    }

    //DELETE BOARD
    const [target, setTarget] = useState('')

    const deleteBuild = async () => {
        console.log(target)
        await axios({
            url: `http://localhost:3001/delete`,
            method: 'delete',
            data: {target}
        })
        localStorage.clear()
        setChange(true)
    }

    
    //EDIT BOARD
    const updateBuild = async () => {
        buildName = prompt('Name your build')
        await axios.post(`http://localhost:3001/update/${target}`, {
            name: buildName, 
            case_id: localStorage.getItem('case'), 
            keycap_id: localStorage.getItem('keycap'), 
            switch_id: localStorage.getItem('switch') 
        })
        localStorage.clear()
        setChange(true)
    }

    useEffect(() => {
        getBuilds()
        setChange(false)
    }, [change])


    return (
        <div className="build-container">
            <h1>{props.users}'s Builds</h1>
                <ul>
                    { builds.map((buildItem) => (
                        <Build
                        key={ buildItem._id } 
                        name={ buildItem.name }
                        case={ buildItem.case_id.name }
                        keycap={ buildItem.keycap_id.name }
                        switch={ buildItem.switch_id.name }
                        image={buildItem.case_id.image}
                        onClick={(e) => {
                            setTarget(buildItem._id)
                            e.target.parentNode.classList.toggle("highlighter")
                            console.log(e.target.parentNode)
                            }}                  
                        />
                        ))
                    }
                </ul>
                <button onClick={buildBoard}>Add Parts</button>
                <button onClick={addNewBuild}>Add Parts to New Build</button>
                <button onClick={deleteBuild}>Delete Build</button>
                <button onClick={updateBuild}>Update Build</button>
            </div>
    )
}
  
  export default BuildList