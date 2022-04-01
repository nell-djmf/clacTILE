import React from 'react'

const Keycap = (props) => {


    return (
        <div className="keycap" style={{
            '--my-image': `url(${props.image})`,
            '--hover-image': `url(${props.image})`
            }}>
              <div className='keycap-card'>
              <h2>{ props.name }</h2>
              <h3>Profile: { props.profile } </h3>
              <h3>Material: { props.material } </h3>
              <h3>Type: { props.lettering } </h3>
              <h3>Color: { props.color } </h3>
              <h3>ID: <button onClick={props.addKeycap}>{props.id}</button> </h3>
              </div>
        </div>
    )
}
    

export default Keycap
