import React from 'react'

export default function Certification() {
  let heading = {
    padding: "2rem 0"
  }
  let Container = {
    textAlign: "center",
    padding: "2rem",
    backgroundColor: "#f7f9f8",
    width: "100%",
    minHeight: "80vh"
  }
  let gridMode = {
    display: 'grid', gridTemplateColumns: 'auto 40%', fontSize: "1.5rem", fontWeight: "600",
    textAlign: "left", gridGap: '16px', justifyContent: "space-around"

  }
  return (
    <div className='component-container' style={Container}>
      <h3 style={heading}>Certificate</h3>

      <div >
        <div className='container' style={gridMode}>
          <div>
            HTML5 - From Basics to Advanced level.
          </div>
          <div>
            <a href="https://www.udemy.com/certificate/UC-552f959a-5659-41ff-89ab-81d499353db3/" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary">View Certificate</button>
            </a>
          </div>
          <div>
            CSS - Basics To Advanced for front end development.
          </div>
          <div>
            <a href="https://www.udemy.com/certificate/UC-685ce459-a738-427d-b1b5-c114ac523771/" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary">View Certificate</button>
            </a>
          </div>
          <div>
            JavaScript - Basics to Advanced.
          </div>
          <div>
            <a href="https://www.udemy.com/certificate/UC-3f151134-5cae-4e06-bf50-e53c5ee3a81b/" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary">View Certificate</button>
            </a>
          </div>
          <div>
          Complete React Developer Masterclass for Beginners  
          </div>
          <div>
            {/* <a href="https://www.udemy.com/certificate/UC-3f151134-5cae-4e06-bf50-e53c5ee3a81b/" target="_blank" rel="noopener noreferrer"></a> */}
              <button className="btn btn-primary">Pursuing</button>
          </div>
        </div>

      </div>
    </div>
  )
}
