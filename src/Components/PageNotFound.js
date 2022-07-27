import React from 'react';
import { Link } from "react-router-dom"
import PageFound from "../Assets/404PageNotFound.jpg"

export default function PageNotFound() {
    let page404 = {
        textAlign: "center",
        paddingTop: "3rem",
        textDecoration: "none",
        fontWeight: 600,
        color: "brown"
    }
    let background = {
        background: `Url(${PageFound})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"


    }


    return (
        <div className='component-container' style={background} >
            <div style={page404}>

                <h2 >404 Page Not Found</h2>
                <Link style={page404} to="/"> &larr; Back To Home</Link>

            </div>

        </div>
    )
}
