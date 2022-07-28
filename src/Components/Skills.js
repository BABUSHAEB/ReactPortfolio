
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
            <span>   HTML 5 <i className="fa-brands fa-html5" /></span>

          </div>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
          </div>
          <div>
            <span>  CSS <i className="fa-brands fa-css3" /> </span>
          </div>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
          </div>
          <div>
            <span> JavaScript <i className="fa-brands fa-js" /> </span>
          </div>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
          </div>
          <div>
            <span>    Bootstrap <i className="fa-brands fa-bootstrap" /></span>
          </div>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
          </div>
          <div>
            <span>   React <i className="fa-brands fa-react" /></span>
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
            <span>  GIt/GitBash <i className="fa-brands fa-github" /></span>
          </div>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
          </div>
          <div>
            <span> Visual Studio Code <i className="fa-brands fa-github" /></span>
          </div>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
          </div>
          <div>
            <span> Postman <i className="fa-brands fa-github" /></span>
          </div>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
          </div>
          <div>
            <span> MS Office <i className="fa-brands fa-github" /></span>
          </div>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
          </div>

        </div>
      </div>

    </div>
  )
}
