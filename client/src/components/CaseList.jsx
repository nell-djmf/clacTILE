import Case from "./Case";
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CaseList = (props) => { 
    const [cases, setCases] = useState([])
    const [search, setSearch] = useState('')
    const [isSearched, setIsSearched] = useState(false)
    let navigate = useNavigate()

    const getCases = async () => {
        const res = await axios.get(`http://localhost:3001/cases`)
        setCases(res.data)
    }

    const getNewCases = async () => {
        const res = await axios.get(`http://localhost:3001/cases/${search}`)
        setCases(res.data)
    }
    
    useEffect(() => {
        getCases()
    }, [])


    useEffect(() => {
        getNewCases()
        setIsSearched(false)
    }, [isSearched])
    



    const addCase = (e) => {
        localStorage.setItem('case', e.target.innerHTML)
        console.log(localStorage)
        navigate(`/keycaps`)
    }


  
      return (
          <div className="case-container">
                <h1>Cases</h1>
                <div className='search'>
                    <input 
                        placeholder='search parts'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={() => setIsSearched(true)}>?</button>
                </div>
              <ul>
                  { cases.map((caseItem) => (
                      <Case
                      key={ caseItem.name } 
                      name={ caseItem.name }
                      layout={ caseItem.layout }
                      material={ caseItem.material }
                      color={ caseItem.color }
                      image={caseItem.image}
                      id={caseItem._id}
                      addCase={addCase}                  
                      />
                  ))
                  }
              </ul>
          </div>
      )
  }
  
  export default CaseList