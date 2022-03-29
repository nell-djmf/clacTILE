import Keycap from "./Keycap"
import { useState, useEffect } from 'react'
import axios from 'axios'

const KeycapList = (props) => {

  
      return (
          <div className="keycap-container">
              <h1>Keycaps</h1>
              <ul>
                  { props.keycaps.map((keycapItem) => (
                      <Keycap
                      key={ keycapItem.name } 
                      name={ keycapItem.name }
                      profile={ keycapItem.profile }
                      material={ keycapItem.material }
                      type={ keycapItem.lettering }
                      color={ keycapItem.color }                  
                      />
                  ))
                  }
              </ul>
          </div>
      )
  }
  
  export default KeycapList