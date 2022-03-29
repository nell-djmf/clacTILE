import Switch from "./Switch"
import { useState, useEffect } from 'react'
import axios from 'axios'

const SwitchList = (props) => {

  
      return (
          <div className="switch-container">
              <h1>Switches</h1>
              <ul>
                  { props.switches.map((switchItem) => (
                      <Switch
                      key={ switchItem.name } 
                      name={ switchItem.name }
                      type={ switchItem.type }
                      material={ switchItem.material }
                      color={ switchItem.color }                  
                      />
                  ))
                  }
              </ul>
          </div>
      )
  }
  
  export default SwitchList