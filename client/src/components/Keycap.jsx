import React from 'react'

const Keycap = (props) => {


    return (
        <div className="keycap">
          <div>
            <li>
              <div className='keycap-card'>
              <button onClick={props.addKeycap}>{ props.name }</button>
              <h3>Profile: { props.profile } </h3>
              <h3>Material: { props.material } </h3>
              <h3>Type: { props.lettering } </h3>
              <h3>Color: { props.color } </h3>
              </div>
            </li>
          </div>
        </div>
    )
}
    

export default Keycap
