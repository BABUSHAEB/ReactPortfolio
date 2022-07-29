
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
                <li>Basics</li>
                <li>Forms</li>
                <li>Semantic HTML</li>
                <li>SEO Basics</li>
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
                <li>Basics</li>
                <li>Selectors</li>
                <li>Box Model</li>
                <li>Positioning</li>
                <li>Box Model</li>
                <li>Display</li>
                <li>FlexBox</li>
                <li>Grid</li>
                <li>Media Queries</li>
                <li>Pseudo Elements</li>
                <li>Pseudo Classes</li>
                <li>Animations</li>
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
                <li> Basic Syntax</li>
                <li>DOM Manipulation</li>
                <li>Fetch API / Ajax</li>
                <li>Async Await</li>
                <li>Event Listeners</li>
                <li>ES6+ JavaScript</li>
                <li>Promises</li>
                <li>Classes</li>
                <li>Array Methods</li>
                <li>Objects</li>
                <li>Scoping</li>
                <li>Hoisting</li>
                <li>Closures</li>
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
                <li>Components</li>
                <li>JSX</li>
                <li>Props</li>
                <li>State</li>
                <li>Events</li>
                <li>Conditional Rendering</li>
                <li>Hooks 
                  <ul>
                    <li>useState</li>
                    <li>useEffect</li>
                  </ul>
                </li>
                <li>React packages
                  <ul>
                    <li>React Router</li>
                    <li>Styled Components</li>
                    <li>Axios</li>
                  </ul>
                </li>
                <li>React UI Frameworks
                  <ul>
                    <li>React Bootstrap</li>
                  </ul>
                </li>
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
                <li>API Integration</li>
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
