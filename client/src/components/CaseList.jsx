import Case from "./Case";
import { useState, useEffect } from 'react'
import axios from 'axios'

const CaseList = (props) => {

    const [cases, setCases] = useState([])

    const getCases = async () => {
        const res = await axios.get('http://localhost:3001/cases')
        console.log(res.data)
        setCases(res.data)
    }
    

  
      return (
          <div className="case-container">
              <h1>Cases</h1>
              <ul>
                  { props.cases.map((caseItem) => (
                      <Case
                      key={ caseItem.name } 
                      name={ caseItem.name }
                      layout={ caseItem.layout }
                      material={ caseItem.material }
                      color={ caseItem.color }                  
                      />
                  ))
                  }
              </ul>
          </div>
      )
  }
  
  export default CaseList