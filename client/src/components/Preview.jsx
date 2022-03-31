import React, { useEffect } from 'react'
import { useState } from 'react'



const Preview = (props) => {

    return (
        <div className="preview">
            <h2>Preview <button>Clear</button></h2>
            <div className='preview-pane'>
                <div>{props.preview.length === 0 && <div>No Items in Preview</div>}</div>
                { props.basket.map((basketItem) => (
                        <div>{basketItem}</div>
                    ))
                }
            </div>
        </div>
    )
}
    

export default Preview
