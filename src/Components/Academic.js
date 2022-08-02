import React from 'react'
import styled from 'styled-components';


let AcademicGrid = styled.div`
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
  padding:2rem;
 }
@media (min-width: 0px) and (max-width: 600px){
  

}
`;

export default function Academic() {
  let Acdemic = [{
    id: 1,
    Education: "Graduation",
    Degree: "Bachelor of Science",
    Specialization: "Information Technology",
    Board: "University Of Mumbai",
    FromYear: 2017,
    FromYearMonth: "August",
    ToYear: 2020,
    ToYearMonth: "November",
    MarkObtained: "7.65 CGPA",
    Institute: "Saket College Of Arts Science and Commerce"
  }, {
    id: 2,
    Education: "Intermediate",
    Degree: "Higher Secondary School/PUC",
    Specialization: "Science",
    Board: "Bihar School Examination Board, PATNA Borad",
    FromYear: 2015,
    FromYearMonth: "May",
    ToYear: 2017,
    ToYearMonth: "May",
    MarkObtained: "60 %",
    Institute: "S.K.M.R G. College, Latihanwa, E.Champaran"
  }, {
    id: 3,
    Education: "SSC/Matriculation",
    Degree: "SLC/10th",
    // Specialization: "Math,Computer",
    Specialization: "",
    Board: "SLC Borad ",
    FromYear: 2013,
    FromYearMonth: "March",
    ToYear: 2014,
    ToYearMonth: "June",
    MarkObtained: "51.2 %",
    Institute: "Angel International Boarding School"
  }];

  return (
    <div className='component-container'>
      <AcademicGrid >
        <h2 className="heading">Academic</h2>
        {Acdemic.map(Acdemic => {
          return (
            <>
              <div key={Acdemic.id} className="card1" >
                <div className="box-shadow">
                  {/* <img src={Acdemic.Image}  className="card-img-top" alt={Acdemic.Title} /> */}
                  <div className="card-body">
                    <h4 className="card-title heading" >{Acdemic.Education}</h4>
                    <p className="card-text my-1 mx-1"><strong>Course: </strong>{Acdemic.Degree}</p>

                    {(Acdemic.Specialization) !== "" && 
                    <p className="card-text my-1 mx-1"><strong>Specialization: </strong>{Acdemic.Specialization}</p>
                    }
                    <p className="card-text my-1 mx-1"><strong>Institute: </strong>{Acdemic.Institute}</p>
                    <p className="card-text my-1 mx-1"><strong>University: </strong>{Acdemic.Board}</p>
                    <p className="card-text my-1 mx-1"><strong>Year: </strong>{Acdemic.FromYearMonth}-{Acdemic.FromYear} to {Acdemic.ToYearMonth}-{Acdemic.ToYear}</p>
                    <p className="card-text my-1 mx-1"><strong>Score: </strong>{Acdemic.MarkObtained}</p>
                    {/* <strong> Technology: </strong><br /> */}
                    {/* {Acdemic.Skills.map((Skill, index) => {
                      return (
                        <>
                          <button key={index} className='btn btn-warning my-1 mx-1' style={{ fontSize: "9px" }}>{Skill}</button>
                        </>
                      )
                    })}
                    <br /> */}

                  </div>
                </div>
              </div>
            </>

          )
        })}
      </AcademicGrid>


    </div>
  )
}
