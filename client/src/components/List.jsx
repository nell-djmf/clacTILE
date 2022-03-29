import React from 'react'

const List = (props) => {


    return (
        <div className="list">
          <div>
            <ul>
              <div className='list-card'>
                <button>{props.name}</button>
              </div>
            </ul>
          </div>
        </div>
    )
}
    

export default List
