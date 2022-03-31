import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

const Build = (props) => {

  const highlight = () => {

  }

    return (
        <div  id='select' className="build">
              <div className='build-card' onClick={props.onClick}>
                <h2>{props.name}</h2>
                <h3>Case: { props.case } </h3>
                <h3>Keycaps: { props.keycap } </h3>
                <h3>Switches: { props.switch } </h3>
              </div>
        </div>
    )
}
    

export default Build
