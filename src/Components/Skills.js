
import React from 'react'

export default function Skills() {

  let Container = {
    textAlign: "center",
    padding: "2rem",
    backgroundColor: "#d2d8dd",
    width: "100%",
    minHeight: "80vh"


  }

let heading = {
  padding: "2rem 0" 
}
  return (
    <div className='component-container' style={Container}>

      <h3 style={heading}>Front End Technologies</h3>

      <div >
        <div className='container gridView'>
          <div>
            <details>
              <summary>HTML 5 <i className="fa-brands fa-html5" /></summary>
              <ul>
                <li>Semantic Tags</li>
                <li>Layout Grid/Flex</li>
              </ul>
            </details>
          </div>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
          </div>
          <div>
            <details>
              <summary>CSS <i className="fa-brands fa-css3" /> </summary>
              <ul>
                <li>Media Query</li>
                <li>Designing</li>
                <li>Box Model</li>
              </ul>
            </details>
          </div>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
          </div>
          <div>
            <details>
              <summary>JavaScript <i className="fa-brands fa-js" /> </summary>
              <ul>
                <li>Datatype</li>
                <li>Operator</li>
                <li>Ternary Operator</li>
                <li>API Call
                  <ul>
                    <li>fetch</li>
                    <li>XMLHttpRequest</li>
                    <li>Axios</li>
                    <li>JQuery($.ajax)</li>
                  </ul>
                </li>
                <li>Array</li>
                <li>Objects</li>
                <li>ES6(ECMAScript 6)
                  <ul>
                    <li>Template String</li>
                    <li>String Literial</li>
                    <li>String Literial</li>
                  </ul>
                </li>
              </ul>
            </details>
          </div>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
          </div>
          <div>
            <details>
              <summary>Bootstrap <i className="fa-brands fa-bootstrap" /></summary>
              <ul>
                <li>Layout</li>
                <li>Navbar</li>
                <li>Grid/Flex</li>
                <li>CDN Link  Setup</li>
              </ul>
            </details>

          </div>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
          </div>
          <div>
            <details>
              <summary>React <i className="fa-brands fa-react" /></summary>
              <ul>
                <li>Functional base Component</li>
                <li>Class base Component</li>
                <li>Routing</li>
                <li>Hooks 
                  <ul>
                    <li>useState</li>
                    <li>useEffect</li>
                  </ul>
                </li>
                <li>API Axios</li>
              </ul>
            </details>
          </div>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
          </div>

        </div>
      </div>

      <h3 style={heading}>Tools</h3>

      <div >
        <div className='container gridView' >
          <div>
            <details>
              <summary>Git/GitBash </summary>
              <ul>
                <li>User Configuration</li>
                <li>Cloning</li>
                <li>Pushing</li>
              </ul>
            </details>
          </div>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
          </div>
          <div>
          <details>
              <summary>Visual Studio Code </summary>
              <ul>
                <li>Visual Studio Code Terminal </li>
                <li>Extension Setup</li>
                <li>Version Control</li>
              </ul>
            </details>
          </div>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
          </div>
          <div>
          <details>
              <summary>Postman </summary>
              <ul>
                <li>API Testing</li>
              </ul>
            </details>
          </div>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
          </div>
          <div>
          <details>
              <summary>MS Office Tools</summary>
              <ul>
                <li>Microsoft Word</li>
                <li>Microsoft Excel</li>
                <li>Microsoft Paint</li>
                <li>Microsoft Outlook</li>
              </ul>
            </details>
          </div>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
          </div>

        </div>
      </div>

    </div>
  )
}
