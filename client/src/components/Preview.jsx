import React, { useEffect } from 'react'
import { useState } from 'react'



const Preview = (props) => {

    return (
        <div className="preview">
            <h2>Preview <button>Clear</button></h2>
            <div className='preview-pane'>
                <div>{props.preview.length === 0 && <div>No Items in Preview</div>}</div>
                {Object.keys(props.preview).map((item) => {
                    <div key={item.name}>
                        <div>{item.name}</div>
                    </div>
                })}
            </div>
        </div>
    )
}
    

export default Preview
