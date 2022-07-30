import React from 'react'
import styled from 'styled-components';
// import TextToolsImage from "../"


let PersonalProjectGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    // font-size: 1.5rem;
    font-weight: "600";
    grid-gap: 16px;
    justify-content: space-around;
    margin:2rem;
    padding-top: 2rem;
    div.box-shadow: hover{
        box-shadow: 5px 5px 6px blue;
     }
    @media (min-width: 0px) and (max-width: 600px){
      grid-template-columns: auto;
    }
`;

let CollegeProjectGrid = styled.div`
display: grid;
grid-template-columns: auto;
// font-size: 1.5rem;
font-weight: "600";
grid-gap: 16px;
justify-content: space-around;
margin:2rem;
div.box-shadow: hover{
    box-shadow: 5px 5px 6px blue;
 }
@media (min-width: 0px) and (max-width: 600px){
  grid-template-columns: auto;
}
`;
export default function Projects() {
  let CollegeProjects = [{
    Title: "Online Mobile Site",
    Platform: ".Net Framework",
    IDE: "Visual Studio 2017",
    TeamMember: "Two",
    Role: "UI Development",
    Skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    Description:"In this project, I was responsible for creating responsive UI with bootstrap ,CSS ,HTML. We were three member and each member has disturbed roles to this project."
  }];
  let PersonalProjects = [{
    id: 1,
    Title: "Text Tools",
    Platform: "React Js Library",
    Image: "Images/Texttools.png",
    IDE: "Visual Studio Code",
    Role: "UI Development",
    Skills: ["JSX", "CSS", "JavaScript", "Bootstrap", "React JS", "React Router"],
    Description: "I have created to Enhance my Skills towards React .The beauty of this project is that it has theme of dark and light ,It is able to perform such operation like Upper Case ,Lower Case ,Count the both letter and word , reverse the Entire paragraph ,Copy all the paragraph in text box remove extra Spaces and Download Text in '.txt' Formate."
  }];
  return (
    <div className='component-container'>
      <div>
        <h2 className="heading">College Projects</h2>
        <CollegeProjectGrid >
          {CollegeProjects.map(CollegeProjects => {
            return (
              <>
                <div key={CollegeProjects.id} className="card" style={{ width: "24rem" }}>
                  <div className="box-shadow">
                    {/* <img src={CollegeProjects.Image}  className="card-img-top" alt={CollegeProjects.Title} /> */}
                    <div className="card-body">
                      <h4 className="card-title heading" >{CollegeProjects.Title}</h4>
                      <p className="card-text my-1 mx-1"><strong>Plateform:</strong> {CollegeProjects.Platform}</p>
                      <p className="card-text my-1 mx-1"><strong>IDE:</strong> {CollegeProjects.IDE}</p>
                      <p className="card-text my-1 mx-1"><i>{CollegeProjects.Description}</i></p>
                      <strong> Technology: </strong><br/>
                      {CollegeProjects.Skills.map((Skill, index) => {
                        return (
                          <>
                            <button key={index} className='btn btn-warning my-1 mx-1' style={{ fontSize: "9px" }}>{Skill}</button>
                          </>
                        )
                      })}
                      <br />
                    
                  </div>
                </div>
              </div>
              </>

        )
          })}
      </CollegeProjectGrid>
      </div>
      <div>
        <h2 className="heading">Personal Projects</h2>
        <PersonalProjectGrid >
          {PersonalProjects.map(PersonalProjects => {
            return (
              <>
                <div key={PersonalProjects.id} className="card" style={{ width: "24rem" }}>
                  <div className="box-shadow">
                    <img src={PersonalProjects.Image}  className="card-img-top" alt={PersonalProjects.Title} />
                    <div className="card-body">
                      <h4 className="card-title heading" >{PersonalProjects.Title}</h4>
                      <p className="card-text my-1 mx-1"><strong>Plateform:</strong> {PersonalProjects.Platform}</p>
                      <p className="card-text my-1 mx-1"><strong>IDE:</strong> {PersonalProjects.IDE}</p>
                      <p className="card-text my-1 mx-1"> <i>{PersonalProjects.Description} </i></p>
                      <strong> Technology: </strong><br/>
                      {PersonalProjects.Skills.map((Skill, index) => {
                        return (
                          <>
                     
                            <button key={index} className='btn btn-warning my-1 mx-1' style={{ fontSize: "9px" }}>{Skill}</button>

                          </>
                        )
                      })}
                      <br />
                      <div className="d-flex justify-content-between my-2">
                          <a href="https://texttools.vercel.app/" target="_blank" rel="noopener noreferrer" > <button className="btn btn-primary">
                            View Project</button> </a>          
                        <a href="https://www.youtube.com/watch?v=ZGRECrTjLls" target="_blank" rel="noopener noreferrer" ><button className="btn btn-primary"><i className="fa-brands fa-youtube" /> View Demo  </button> </a>
                        
                    </div>
                  </div>
                </div>
              </div>
              </>

        )
          })}
      </PersonalProjectGrid>
    </div>


    </div >
  )
}
