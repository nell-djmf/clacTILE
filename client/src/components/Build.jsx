import React, { useState } from 'react';


const Build = (props) => {

  const [caseIsClicked, setCaseIsClicked] = useState(false)
  const [kcIsClicked, setKcIsClicked] = useState(false)
  const [switchIsClicked, setSwitchIsClicked] = useState(false)
  

    return (
        <div  id='select' className="build" style={{
        '--my-image': `url(${props.caseimage})`,
        '--hover-image': `url(${props.caseimage})`
        }}>
        {
          caseIsClicked ? (
            <div>
            <div className='popup'>
              <img src={props.caseimage} alt='' onClick={()=>setCaseIsClicked(false)} style={{
                maxWidth: '600px',
                border: '1px solid black'
              }} />
            </div>
            <div className='overlay'></div>
            </div> 
          ) : (
            <div></div>
          )
        }
        {
          kcIsClicked ? ( 
            <div>
            <div className='popup'>
              <img src={props.kcimage} alt='' onClick={()=>setKcIsClicked(false)} style={{
                maxWidth: '600px',
                border: '1px solid black'
              }} />
            </div>
            <div className='overlay'></div>
            </div>
          ) : (
            <div></div>
          )
        }
        {
          switchIsClicked ? ( 
            <div>
            <div className='popup'>
              <img src={props.switchimage} alt='' onClick={()=>setSwitchIsClicked(false)} style={{
                maxWidth: '600px',
                border: '1px solid black'
              }} />
            </div>
            <div className='overlay'></div>
            </div>
          ) : (
            <div></div>
          )
        }
              <div className='build-card' onClick={props.onClick}>
                <h2>{props.name}</h2>
                <h3 onClick={()=>setCaseIsClicked(true)}  className='item-name'>Case: { props.case } </h3>
                <h3 onClick={()=>setKcIsClicked(true)}  className='item-name'>Keycaps: { props.keycap } </h3>
                <h3 onClick={()=>setSwitchIsClicked(true)}  className='item-name'>Switches: { props.switch } </h3>
              </div>
        </div>
    )
}
    

export default Build
