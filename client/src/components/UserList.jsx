import User from "./User"
import { useEffect, useState } from "react"
import axios from 'axios'

const UserList = (props) => {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const res = await axios.get('http://localhost:3001/users')
        console.log(res.data)
        setUsers(res.data)
      }

      useEffect(() => {
        getUsers()
      }, [])
  
      return (
          <div className="user-container">
              <h1>Users</h1>
              <ul>
                  { users.map((userItem) => (
                      <User
                      key={ userItem.name } 
                      name={ userItem.name }              
                      />
                    ))
                  }
              </ul>
          </div>
      )
  }
  
  export default UserList