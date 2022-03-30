import React from 'react'
import { useEffect, useState } from "react"
import axios from 'axios'
import List from './List'
import { useNavigate } from 'react-router-dom'



const User = (props) => {

  const [lists, setLists] = useState([])

  const getLists = async () => {
    const res = await axios.get(`http://localhost:3001/lists/${props.name}`)
    setLists(res.data)
    console.log(localStorage)
  }

  useEffect(() => {
    getLists()
  }, [])


  let navigate = useNavigate()

  
  const showBuilds = (e) => {
    navigate(`/users/${props.name}`)
  }



    return (
        <div className="user">
          <div>
            <li>
              <div className='user-card'>
                <h2>{props.name}</h2>
                    { lists.map((listItem) => (
                        <List
                        key={ listItem.name } 
                        name={ listItem.name }
                        showBuilds={ showBuilds }            
                        />
                        ))
                    }
                </div>
            </li>
          </div>
        </div>
    )
}
    

export default User
