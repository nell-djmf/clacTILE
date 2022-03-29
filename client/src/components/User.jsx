import React from 'react'
import { useEffect, useState } from "react"
import axios from 'axios'
import List from './List'

const User = (props) => {

    const [lists, setLists] = useState([])

    const getLists = async () => {
        const res = await axios.get(`http://localhost:3001/lists/${props.name}`)
        console.log(res.data)
        setLists(res.data)
    }

    useEffect(() => {
        getLists()
      }, [])


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
