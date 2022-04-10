
import Build from "./Build"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




const BuildList = (props) => {

    //GET ALL BUILDS
    const [builds, setBuilds] = useState([])
    const [change, setChange] = useState(false)

    const getBuilds = async () => {
        const res = await axios.get(`http://localhost:3001/api/builds`)
        setBuilds(res.data)
    }

    useEffect(() => {
        getBuilds()
      }, [])

    //ADD BUILDS
    let buildName = ''
      
    const addNewBuild = async () => {
        if (localStorage.getItem('case') && localStorage.getItem('keycap') && localStorage.getItem('switch')) {
            buildName = prompt('Name your build')
            await axios.post(`http://localhost:3001/api/builds/create`, { 
                name: buildName, 
                case_id: localStorage.getItem('case'), 
                keycap_id: localStorage.getItem('keycap'), 
                switch_id: localStorage.getItem('switch') 
            })
            localStorage.clear()
            setChange(true)
        } else {
            alert('Please add parts to create build')
        }
    }
    

    //Sends user to cases page
    let navigate = useNavigate()
    const buildBoard = (e) => {
      navigate(`/cases`)
    }

    //DELETE BUILD
    const [target, setTarget] = useState('')

    const deleteBuild = async () => {
        if (target === '') {
            alert('Please select a build to delete')
        } else if (target) {
            console.log(target)
            await axios({
                url: `http://localhost:3001/api/delete`,
                method: 'delete',
                data: {target}
            })
            localStorage.clear()
            setChange(true)
        }
    }

    //UPDATE BUILD
    const updateBuild = async () => {
        if (target === '') {
            alert('Please select a build to apply changes')
        } else if (target) {
            buildName = prompt('Name your build')
            await axios.post(`http://localhost:3001/api/update/${target}`, {
                name: buildName, 
                case_id: localStorage.getItem('case'), 
                keycap_id: localStorage.getItem('keycap'), 
                switch_id: localStorage.getItem('switch') 
            })
            localStorage.clear()
            setChange(true)
        }
        
    }

    //Triggers re-render when build edits are made
    useEffect(() => {
        getBuilds()
        setChange(false)
    }, [change])


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
                <button onClick={addNewBuild} className='edit-builds'>Post Parts as New Build</button>
                <button onClick={deleteBuild} className='edit-builds'>Delete Build</button>
                <button onClick={updateBuild} className='edit-builds'>Update Build</button>
                <div className="preview">
                    <h5 className="preview-title">Items</h5>
                    <p className="preview-item">case id: {localStorage.getItem('case')}</p>
                    <p className="preview-item">keycap id: {localStorage.getItem('keycap')}</p>
                    <p className="preview-item">switch id: {localStorage.getItem('switch')}</p>
                </div>
                </div>
            </div>
    )
}
  
  export default BuildList