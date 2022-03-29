import React from 'react'

const Case = (props) => {


    return (
        <div className="case">
          <div>
            <li>
              <div className='case-card'>
                <button onClick={props.addCase}>{props.name}</button>
                <h3>Layout: { props.layout } </h3>
                <h3>Material: { props.material } </h3>
                <h3>Color: { props.color } </h3>
              </div>
            </li>
          </div>
        </div>
    )
}
    

export default Case
