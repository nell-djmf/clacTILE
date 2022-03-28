import React from 'react'

const Build = (props) => {


    return (
        <div className="build">
          <div>
            <li>
              <div className='build-card'>
                <h2>{props.name}</h2>
                <h3>Case: { props.case_id } </h3>
                <h3>Keycaps: { props.keycaps_id } </h3>
                <h3>Switches: { props.switch_id } </h3>
              </div>
            </li>
          </div>
        </div>
    )
}
    

export default Build
