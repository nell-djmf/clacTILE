import Case from "./Case";
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CaseList = (props) => { 
    const [cases, setCases] = useState([])
    const [search, setSearch] = useState('')
    const [isSearched, setIsSearched] = useState(false)
    let navigate = useNavigate()

    //GET ALL CASES
    const getCases = async () => {
        const res = await axios.get(`/api/cases`)
        setCases(res.data)
    }

    //GET SEARCHED CASES
    const getNewCases = async () => {
        const res = await axios.get(`http://localhost:3001/api/cases/${search}`)
        setCases(res.data)
    }
    
    useEffect(() => {
        getCases()
    }, [])

    //Triggers re-render on search
    useEffect(() => {
        getNewCases()
        setIsSearched(false)
    }, [isSearched])
    
    //Adds case id to local storage, navigates to next page
    const addCase = (e) => {
        localStorage.setItem('case', e.target.innerHTML)
        navigate(`/keycaps`)
    }


      return (
          <div className="case-container">
                <h1>Cases</h1>
                <div className='search-container'>
                    <input 
                        placeholder='search parts'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={() => setIsSearched(true)} className='search'>✦</button>
                </div>
              <div className="wrapper">
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
              </div>
          </div>
      )
  }
  
  export default CaseList