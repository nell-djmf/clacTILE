// import User from "./User"


// const UserList = (props) => {


//     const buildCompile = () => {
//         let buildName = prompt('Name your build')
//         props.setNewKbuild({name: buildName, case_id: localStorage.getItem('case'), keycap_id: localStorage.getItem('keycap'), switch_id: localStorage.getItem('switch')})
//         localStorage.clear()
//         }

  
//       return (
//           <div className="user-container">
//               <h1>Users</h1>
//               <ul>
//                   { props.users.map((userItem) => (
//                       <User
//                       key={ userItem.name } 
//                       name={ userItem.name }
//                       buildCompile={buildCompile}              
//                       />
//                     ))
//                   }
//               </ul>
//           </div>
//       )
// }
  
//   export default UserList


import Build from "./Build"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




const BuildList = (props) => {

    const [builds, setBuilds] = useState([])


    const getBuilds = async () => {
        const res = await axios.get(`http://localhost:3001/builds`)
        console.log(res.data)
        setBuilds(res.data)
    }

    useEffect(() => {
        getBuilds()
      }, [])



    // const addNewBuild = async () => {
    //     let buildName = prompt('Enter name for new build')
    //     const res = await axios.post(`http://localhost:3001/users/${props.name}/create/${buildName}`)
    // }

    let navigate = useNavigate()

  
    const buildBoard = (e) => {
      navigate(`/cases`)
    }

  
      return (
          <div className="build-container">
              <h1>{props.users}'s Builds</h1>
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
              <button onClick={buildBoard}>Add New</button>
          </div>
      )
  }
  
  export default BuildList