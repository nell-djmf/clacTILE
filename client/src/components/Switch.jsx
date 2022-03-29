import React from 'react'

const Switch = (props) => {


    return (
        <div className="switch">
          <div>
            <li>
              <div className='switch-card'>
                <button onClick={props.addSwitch}>{ props.name }</button>
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
