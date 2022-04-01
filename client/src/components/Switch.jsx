import React from 'react'

const Switch = (props) => {


    return (
        <div className="switch" style={{
          '--my-image': `url(${props.image})`,
          '--hover-image': `url(${props.image})`
          }}>
              <div className='switch-card'>
                <h2>{ props.name }</h2>
                <h3>Type: { props.type } </h3>
                <h3>Actuation Force: { props.actuation } </h3>
                <h3>Color: { props.color } </h3>
                <h3>ID: <button onClick={props.addSwitch}>{props.id}</button></h3>
              </div>
        </div>
    )
}
    

export default Switch
