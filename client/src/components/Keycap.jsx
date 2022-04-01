import React from 'react'
import { useState } from 'react'

const Keycap = (props) => {

    const [isClicked, setIsClicked] = useState(false)


    return (
        <div className="keycap" style={{
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
                  }} className='popup'/>
                </div>
              <div className='overlay'></div>
            </div>
          ) : (
            <div></div>
          )
        }
            <div className='keycap-card'>
              <h2 onClick={()=>setIsClicked(true)}  className='item-name'>{ props.name }</h2>
                <div className='info'>
                    <h3>Profile: { props.profile } </h3>
                    <h3>Material: { props.material } </h3>
                    <h3>Type: { props.lettering } </h3>
                    <h3>Color: { props.color } </h3>
                    <h3>ID: <button onClick={props.addKeycap} className='id-button'>{props.id}</button> </h3>
                </div>
              </div>
        </div>
    )
}
    

export default Keycap
