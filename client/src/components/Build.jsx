import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

const Build = (props) => {


    return (
        <div className="build">
          <div>
            <li>
              <div className='build-card'>
                <h2>{props.name}</h2>
                <h3>Case: { props.case } </h3>
                <h3>Keycaps: { props.keycap } </h3>
                <h3>Switches: { props.switch } </h3>
              </div>
            </li>
          </div>
        </div>
    )
}
    

export default Build
