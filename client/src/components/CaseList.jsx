import Case from "./Case";
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CaseList = (props) => {

    const [cases, setCases] = useState([])

    const getCases = async () => {
        const res = await axios.get('http://localhost:3001/cases')
        setCases(res.data)
    }
    
    useEffect(() => {
        getCases()
      }, [])


    let navigate = useNavigate()

    const addCase = (e) => {
        localStorage.setItem('case', e.target.innerHTML)
        console.log(localStorage)
        navigate(`/keycaps`)
    }



    
  
      return (
          <div className="case-container">
              <h1>Cases</h1>
              <ul>
                  { cases.map((caseItem) => (
                      <Case
                      key={ caseItem.name } 
                      name={ caseItem.name }
                      layout={ caseItem.layout }
                      material={ caseItem.material }
                      color={ caseItem.color }
                      addCase={addCase}                  
                      />
                  ))
                  }
              </ul>
          </div>
      )
  }
  
  export default CaseList