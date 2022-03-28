import React from 'react'

const Switch = (props) => {


    return (
        <div className="switch">
          <div>
            <li>
              <div className='switch-card'>
                <h2>{ props.name }</h2>
                <h3>Type: { props.type } </h3>
                <h3>Actuation Force: { props.actuation } </h3>
                <h3>Color: { props.color } </h3>
              </div>
            </li>
          </div>
        </div>
    )
}
    

export default Switch
