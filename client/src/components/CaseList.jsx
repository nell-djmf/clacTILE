import Case from "./Case";

const CaseList = (props) => {

  
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