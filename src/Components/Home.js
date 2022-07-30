import React from 'react'
import Photo from '../Assets/Photo.png'
import Homebg from '../Assets/Home.jpg'

export default function Home() {
  let photosize = {
    width: "20rem",
    height: "20rem",
    borderRadius: "50%",
    padding:"1rem",
    border:"none",
    marginBottom:"1rem",
    boxShadow: "5px 5px 15px white"
  }
  let container ={
    background: `Url(${Homebg})`,
    textAlign: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    color: "white",
    padding:"3rem",
    // fontFamily: ` 'Lucida Console', "Courier New", monospace`
    // fontFamily: ` "Times New Roman", Times, serif`
    fontFamily: ` Arial, Helvetica, sans-serif`
  }
  return (
    <>
      <div className='component-container' style={container}>
        <div >
          <img style={photosize} src={Photo} alt="Abhishek Singh"  />
          <h3>Abhishek Singh</h3>
          <i>Looking for Opportunity to start Carrier in <br />
            Front-end Technology  like<br />
            HTML, CSS, JavaScript, Bootstrap &amp; React Js.</i>
         
        </div>
      </div>
    </>
  )
}
