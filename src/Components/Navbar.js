import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar(){
    return(
        <>
       <nav className="navbar  fs-5 navbar-expand-lg  bg">
           <div className="container">
               <Link className="navbar-brand navbar-brand1  fs-4" to="/">Portifolio</Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
               <ul className="navbar-nav">
                   <li className="nav-item">
                   <Link className="nav-link " aria-current="page" to="/skills">Skills</Link>
                   </li>
                   <li className="nav-item">
                   <Link className="nav-link " aria-current="page" to="/certificate">Certification</Link>
                   </li>
                   <li className="nav-item">
                   <Link className="nav-link " aria-current="page" to="/projects">Projects</Link>
                   </li>
                   <li className="nav-item">
                   <Link className="nav-link " aria-current="page" to="/academic">Academic</Link>
                   </li>
                   <li className="nav-item">
                   <Link className="nav-link " aria-current="page" to="/aboutme">About Me</Link>
                   </li>
                </ul>
               </div>
           </div>
       </nav>
        
        </>
    );
}
