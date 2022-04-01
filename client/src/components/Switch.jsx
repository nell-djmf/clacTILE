import React from 'react'
import { useState } from 'react'

const Switch = (props) => {

  const [isClicked, setIsClicked] = useState(false)


    return (
        <div className="switch" style={{
          '--my-image': `url(${props.image})`,
          '--hover-image': `url(${props.image})`
          }}>
        {
          isClicked ? ( 
            <div>
                <div className='popup-container'>
                  <img src={props.image} alt='' onClick={()=>setIsClicked(false)} style={{
                    maxWidth: '600px',
                    border: '1px solid black'
                  }}  className='popup'/>
                </div>
              <div className='overlay'></div>
            </div>
          ) : (
            <div></div>
          )
        }
              <div className='switch-card'>
                <h2 onClick={()=>setIsClicked(true)}  className='item-name'>{ props.name }</h2>
                <h3>Type: { props.type } </h3>
                <h3>Actuation Force: { props.actuation } </h3>
                <h3>Color: { props.color } </h3>
                <h3>ID: <button onClick={props.addSwitch}>{props.id}</button></h3>
              </div>
        </div>
    )
}
    

export default Switch
