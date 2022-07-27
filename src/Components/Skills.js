
import React from 'react'

export default function Skills() {

  let Container = {
    textAlign: "center",
    padding: "2rem",
    backgroundColor: "#d2d8dd",
    width: "100%",
    minHeight: "80vh"


  }
  let gridMode = {
    display: 'grid', gridTemplateColumns: 'auto 40%', fontSize: "1.5rem", fontWeight: "600",
    textAlign: "left", gridGap: '16px', color: 'blue', justifyContent: "space-around",
    '@media (max-width: 0px) and(max-width: 500px)': {
      fontSize: "5px", fontWeight: "600"
    },
   
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
                <li>helll</li>
                <li>life</li>
                <li>dance</li>
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
                <li>helll</li>
                <li>life</li>
                <li>dance</li>
              </ul>
            </details>
          </div>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
          </div>
          <div>
            <details>
              <summary> JavaScript <i className="fa-brands fa-js" /> </summary>
              <ul>
                <li>helll</li>
                <li>life</li>
                <li>dance</li>
              </ul>
            </details>
          </div>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
          </div>
          <div>
            <details>
              <summary> Bootstrap <i className="fa-brands fa-bootstrap" /></summary>
              <ul>
                <li>helll</li>
                <li>life</li>
                <li>dance</li>
              </ul>
            </details>

          </div>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
          </div>
          <div>
            <details>
              <summary>  React <i className="fa-brands fa-react" /></summary>
              <ul>
                <li>helll</li>
                <li>life</li>
                <li>dance</li>
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
              <summary>GIt/GitBash <i className="fa-brands fa-github" /></summary>
              <ul>
                <li>helll</li>
                <li>life</li>
                <li>dance</li>
              </ul>
            </details>
          </div>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
          </div>
          <div>
          <details>
              <summary>Visual Studio Code <i className="fa-brands fa-github" /></summary>
              <ul>
                <li>helll</li>
                <li>life</li>
                <li>dance</li>
              </ul>
            </details>
          </div>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
          </div>
          <div>
          <details>
              <summary>Postman <i className="fa-brands fa-github" /></summary>
              <ul>
                <li>helll</li>
                <li>life</li>
                <li>dance</li>
              </ul>
            </details>
          </div>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
          </div>
          <div>
          <details>
              <summary>MS Office <i className="fa-brands fa-github" /></summary>
              <ul>
                <li>helll</li>
                <li>life</li>
                <li>dance</li>
              </ul>
            </details>
          </div>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
          </div>

        </div>
      </div>

    </div>
  )
}
