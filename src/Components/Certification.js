import React from 'react'
import styled from 'styled-components'

let ContainerMode = styled.div`

text-align: center;
padding: 2rem;
background-color: #f5f3f0;
width: 100%;
min-height: 80vh;

.heading{
  padding: 2rem 0;
}

.gridMode{
  display: grid;
  grid-template-columns: auto 40%;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: left;
  grid-gap: 16px;
  justify-content: space-around;

}
.component-container{
  width: auto;
  min-height: 90vh;
  margin: 0;
  
}
  @media (min-width: 0px) and (max-width: 600px){

    .gridMode{
      font-size: 1rem;
      grid-template-columns: auto auto;
    }
    .btn{
      font-size:8px;
    }     
}
`;

export default function Certification() {

  // display: 'grid';
  //  gridTemplateColumns: 'auto 40%', fontSize: "1rem", fontWeight: "600",
  //   textAlign: "left", gridGap: '16px', justifyContent: "space-around"

  return (
    <ContainerMode className='component-container containerwidth' >
      <h3 className='heading' >Certificate</h3>

      <div >
        <div className='container gridMode' >
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
            Complete React Developer Masterclass for Beginners.
          </div>
          <div>
            {/* <a href="https://www.udemy.com/certificate/UC-3f151134-5cae-4e06-bf50-e53c5ee3a81b/" target="_blank" rel="noopener noreferrer"></a> */}
            <button className="btn btn-primary">Pursuing</button>
          </div>
        </div>

      </div>
    </ContainerMode>
  )
}
