// import axios from 'axios';
import React from 'react'
import styled from 'styled-components';

let AboutMeGrid = styled.div`
display: grid;
grid-template-columns:40% auto;
grid-gap: 16px;
font-size:1.5rem;
justify-content: space-around;
padding: 2rem;
.Contact-me-Container{
  margin-top:1rem;
  text-align: center;
}
.Contact-Icon{
  color:white;
  padding:0.8rem;
  font-size:2rem;
  border-radius:50%;
  background:black;
  margin:0.8rem;
  
}
.Contact-Icon:hover {
  background:white;
  color:black;
  box-shadow: 5px 5px 6px blue;
}
h3.aboutme-heading{
  text-align: center;
  padding:1rem;
}
.form-container{
  background: white;
  width:24rem;
  padding:2rem;
  border-radius:1rem;
  text-align: center;
  font-size:1.1rem;
  box-shadow: 5px 5px 6px pink;
}
input, textarea{
  width:16rem;
  margin:0.5rem;
  padding:0.3rem;
  border:none;
  border-bottom: 1px solid #0f0f0f9f;
  outline: none;
}

button{
  border-radius:0.5rem;
  width:16rem;
  background:rgb(230, 74, 105);
  border:none;
  padding:0.3rem;
  color:white;
  font-weight:600;
}
@media (min-width: 0px) and (max-width: 680px){
  grid-template-columns: auto;
  font-size:20px;
  .Contact-Icon{
    color:white;
    padding:0.8rem;
    font-size:2rem;
    border-radius:50%;
    background:black;
    margin:0.4rem;
    
  }
  .form-container{
    width:22rem;
  }

}
`;

let Alert = ()=>{
  alert("This Model is Under Progress! You Can Contact On 8521268654")
  };
export default function AboutMe() {

//  const axios = require("axios");

// const options = {
//   method: 'POST',
//   url: 'https://d7sms.p.rapidapi.com/secure/send',
//   headers: {
//     'content-type': 'application/json',
//     Authorization: 'undefined',
//     'X-RapidAPI-Key': 'fec9a6607fmsh17b0fbe37e8169dp1af5f9jsn5b5718c8b269',
//     'X-RapidAPI-Host': 'd7sms.p.rapidapi.com'
//   },
//   data: '{"content":"Test Message","from":"D7-Rapid","to":971562316353}'
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


  return (
    <div className='component-container aboutme-bg'>
      <AboutMeGrid>
        <div>

          <p>
            <strong> Hi, </strong>my name is Abhishek Singh, and I'm eager to Start Career in Front End Developer.<br />
            My goal is to be Pro Developer and gain Knowledge in others Modern Technology .<br />
            My philosophy is to gain Knowledge by creating quality Application,
            That's why I put a lot of effort into every single Application.
            <h3 className="aboutme-heading"> Contact Me :</h3>
            <div className="Contact-me-Container">
              <span className='Contact-me'>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/babushaeb/">
                  <i className="Contact-Icon fa-brands fa-linkedin" />
                </a>
              </span>
              <span className='Contact-me'>
                <a target="_blank" rel="noopener noreferrer" href="mailto:abhisheksingj123@gmail.com">
                  <i className="Contact-Icon fa-solid fa-envelope" />
                </a>
              </span>
              <span className='Contact-me'>
                <a target="_blank" rel="noopener noreferrer" href="https://wa.me/918521268654">
                  <i className="Contact-Icon fa-brands fa-whatsapp" />
                </a>
              </span>
              <span className='Contact-me'>
                <a href="tel:+918521268654">
                  <i className="Contact-Icon fa-solid fa-phone" />
                </a>
              </span>
            </div>
          </p>

        </div>
        <div >
          <div className='form-container'>
            <h3 className="aboutme-heading"> Contact Me :</h3>
            <form >
              <input type="text" name="name" id="" required placeholder='Name (Abhishek Singh)' />
              <input type="email" name="email" id="" required placeholder='Email (your@email.com)' />
              <input type="number" maxLength="10" name="mobile" id="" required placeholder='Mobile No (7xxxxxxxxx)' />
              <input type="text" name="time" id="" required placeholder='Your Availability (9AM - 7PM)' />
              <textarea name="message" id="" required placeholder='Purpose' cols="23" rows="3"></textarea>
              {/* <button  onClick={Alert()}>Send</button> */}
              <button  disabled>Send</button>
            </form>
          </div>
        </div>


      </AboutMeGrid>

    </div>
  )
}
