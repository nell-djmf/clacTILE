import React from 'react'


const List = (props) => {

  
    return (
        <div className="list">
          <div>
            <ul>
              <div className='list-card'>
                <button className='get-user-list' onClick={props.showBuilds}>{props.name}</button>
              </div>
            </ul>
          </div>
        </div>
    )
}
    

export default List
