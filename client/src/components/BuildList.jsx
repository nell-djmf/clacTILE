import Build from "./Build"

const BuildList = (props) => {

  
      return (
          <div className="case-container">
              <h1>Builds</h1>
              <ul>
                  { props.builds.map((buildItem) => (
                      <Build
                      key={ buildItem.name } 
                      name={ buildItem.name }
                      case={ buildItem.case_id }
                      keycap={ buildItem.keycap_id }
                      switch={ buildItem.switch_id }                  
                      />
                  ))
                  }
              </ul>
          </div>
      )
  }
  
  export default BuildList