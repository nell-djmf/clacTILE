import React from 'react'

const User = (props) => {


    return (
        <div className="user">
          <div>
            <li>
              <div className='user-card'>
                <h2>{props.name}</h2>
                <h3>Builds</h3>
              </div>
            </li>
          </div>
        </div>
    )
}
    

export default User
