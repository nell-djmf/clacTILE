import React from 'react'

const Case = (props) => {


    return (
        <div className="case">
              <div className='case-card' style={{
                backgroundImage: `url(${props.image})`,
                backgroundSize: 'cover',
                }}>
                <h2>{props.name}</h2>
                <h3>Layout: { props.layout } </h3>
                <h3>Material: { props.material } </h3>
                <h3>Color: { props.color } </h3>
                <h3>ID: <button onClick={props.addCase}>{props.id}</button> </h3>
              </div>
        </div>
    )
}
    

export default Case
