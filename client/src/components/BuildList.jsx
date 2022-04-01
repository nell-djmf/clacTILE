
import Build from "./Build"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




const BuildList = (props) => {

    //GET BOARDS
    const [builds, setBuilds] = useState([])
    const [change, setChange] = useState(false)
    const [casePreview, setCasePreview] = useState([])
    const [kcPreview, setKcPreview] = useState([])
    const [switchPreview, setSwitchPreview] = useState([])


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


    const getCasePreview = async () => {
        const res = await axios.get(`http://localhost:3001/cases/${localStorage.getItem('case')}`)
        setCasePreview(res.data)
    }

    const getKcPreview = async () => {
        const res = await axios.get(`http://localhost:3001/cases/${localStorage.getItem('keycap')}`)
        setKcPreview(res.data)
    }

    const getSwitchPreview = async () => {
        const res = await axios.get(`http://localhost:3001/cases/${localStorage.getItem('switch')}`)
        setSwitchPreview(res.data)
    }




    return (
        <div className="build-container">
            <h1>{props.users}'s Builds</h1>
                <div className="wrapper">
                    { builds.map((buildItem) => (
                        <Build
                        key={ buildItem._id } 
                        name={ buildItem.name }
                        case={ buildItem.case_id.name }
                        keycap={ buildItem.keycap_id.name }
                        switch={ buildItem.switch_id.name }
                        caseimage={buildItem.case_id.image}
                        kcimage={buildItem.keycap_id.image}
                        switchimage={buildItem.switch_id.image}
                        onClick={(e) => {
                            setTarget(buildItem._id)
                            e.target.parentNode.classList.toggle("highlighter")
                            console.log(e.target.parentNode)
                            }}                  
                        />
                        ))
                    }
                </div>
                <div className="button-wrapper">
                <button onClick={buildBoard} className='edit-builds'>Add Parts</button>
                <button onClick={addNewBuild} className='edit-builds'>Add Parts to New Build</button>
                <button onClick={deleteBuild} className='edit-builds'>Delete Build</button>
                <button onClick={updateBuild} className='edit-builds'>Update Build</button>
                <div className="preview">
                    <p>case id: {localStorage.getItem('case')}</p>
                    <p>keycap id: {localStorage.getItem('keycap')}</p>
                    <p>switch id: {localStorage.getItem('switch')}</p>
                </div>
                </div>
            </div>
    )
}
  
  export default BuildList