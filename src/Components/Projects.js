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
    div.box-shadow{
      box-shadow: 5px 5px 8px black;
    }

    div.card-body{
      padding:0.8rem;
      border-radius:20%;
    }
    div.card1{
      width:24rem;
      border: none;
    }
    div.box-shadow: hover{
        box-shadow: 5px 5px 6px blue;
     }
    @media (min-width: 0px) and (max-width: 600px){
      grid-template-columns: auto;
        div.box-shadow{
          box-shadow: 5px 5px 6px black;
          margin-bottom: 2rem;
      }
      div.card1{
        // width:fit-content;
        width: 92vw;
      }
    }
`;

let CollegeProjectGrid = styled.div`
display: grid;
grid-template-columns: auto;
font-weight: "600";
grid-gap: 16px;
justify-content: space-around;
padding: 1rem;

div.box-shadow{
  box-shadow: 5px 5px 8px black;
}
div.box-shadow: hover{
    box-shadow: 5px 5px 6px blue;
 }
 .card-body{
  padding:10px;
 }
@media (min-width: 0px) and (max-width: 600px){
 
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
    Description:"we were 3 members in this Project the work all three was divided separately in which UI Desiging was my Responsiblity."
  }];
  let PersonalProjects = [{
    id: 1,
    Title: "Text Tools",
    Platform: "React Js Library",
    Image: "Images/Texttools.png",
    IDE: "Visual Studio Code",
    Role: "UI Development",
    Skills: ["JSX", "CSS", "JavaScript", "Bootstrap", "React JS", "React Router", "useState Hooks"],
    Description: "I have created it to Enhance my Skills in React. The beauty of this project is that it has a theme of Dark and Bright, It is able to perform such operations as Upper Case , Lower Case, Count letters & words, reverse the Entire paragraph, Copy all the paragraphs in the text box remove extra Spaces and Download Text in '.txt' Format.",
    ViewProject: "https://texttools.vercel.app/",
    ViewDemo: "https://www.youtube.com/watch?v=ZGRECrTjLls"
  },
  {
    id: 2,
    Title: "Weather Tools",
    Platform: "React Js Library",
    Image: "Images/APIWeatherApp.png",
    IDE: "Visual Studio Code",
    Role: "UI Development",
    Skills: ["JSX", "CSS", "JavaScript", "React JS", "useState Hooks", "API Integration", "Axois"],
    Description: "I have created this Application to Ehance my knowledge towards in API Integration.In this application I have use Axios Package to Use API Integration with Error Handling and I have done Validation to Input Field .I'm fetching data from Open weather API . I'm showing Sunrise, Sunset and Max , Min Feel Like tempurature ,Current Date.Converting Kevlin to Celcus",
    ViewProject: "https://apiweatherapp.vercel.app/",
    ViewDemo: "https://youtu.be/i8iagOLd3RA"
  }];
  return (
    <div className='component-container Component-color'>
      <div>
        <h2 className="heading">College Project</h2>
        <CollegeProjectGrid >
          {CollegeProjects.map(CollegeProjects => {
            return (
              <>
                <div key={CollegeProjects.id} className="card1" >
                  <div className="box-shadow">
                    {/* <img src={CollegeProjects.Image}  className="card-img-top" alt={CollegeProjects.Title} /> */}
                    <div className="card-body">
                      <h4 className="card-title heading" >{CollegeProjects.Title}</h4>
                      <p className="card-text my-1 mx-1"><strong>Platform:</strong> {CollegeProjects.Platform}</p>
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
                <div key={PersonalProjects.id} className="card1" >
                  <div className="box-shadow">
                    <img src={PersonalProjects.Image}  className="card-img-top" alt={PersonalProjects.Title} />
                    <div className="card-body">
                      <h4 className="card-title heading" >{PersonalProjects.Title}</h4>
                      <p className="card-text my-1 mx-1"><strong>Platform:</strong> {PersonalProjects.Platform}</p>
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
                          <a href={PersonalProjects.ViewProject} target="_blank" rel="noopener noreferrer" > <button className="btn btn-primary">
                            View Project</button> </a>          
                        <a href={PersonalProjects.ViewDemo} target="_blank" rel="noopener noreferrer" ><button className="btn btn-primary"><i className="fa-brands fa-youtube" /> View Demo  </button> </a>
                        
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
