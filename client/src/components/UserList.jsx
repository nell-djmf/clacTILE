import User from "./User"

const UserList = (props) => {

  
      return (
          <div className="user-container">
              <h1>Users</h1>
              <ul>
                  { props.users.map((userItem) => (
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