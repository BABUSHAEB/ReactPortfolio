import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="footer-container">
                <footer>
                    {/* <div className="d-flex justify-content-between">

                        <p>Author: Hege Refsnes</p>
                        <p><a href="mailto:hege@example.com">hege@example.com</a></p>
                    </div> */}
                    <div className="container  text-center">
                        <div className="row">
                            <div className="col-auto">
                                <p> &copy; Copyright 2022-2022 by Abhishek Singh. All Rights Reserved.  </p>
                            </div>
                            <div className="col-auto ms-md-auto col-md-6 col-sm-12">
                                <h5 className='mb-3 text-center'>Contact Me : </h5>
                                <span className='social-icon' >
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/BABUSHAEB/">
                                        <i className="a-remove  fa-brands fa-github" />
                                    </a>
                                </span>
                                <span className='social-icon'>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/babushaeb/">
                                        <i className="a-remove fa-brands fa-linkedin" />
                                    </a>
                                </span>
                                <span className='social-icon'>
                                    <a target="_blank" rel="noopener noreferrer" href="mailto:abhisheksingj123@gmail.com">
                                        <i className="a-remove fa-solid fa-envelope" />
                                    </a>
                                </span>
                                <span className='social-icon'>
                                    <a href="https://twitter.com/Babushaeb_Abhi/" target="_blank" rel="noopener noreferrer">
                                        <i className="a-remove fa-brands fa-twitter" />
                                    </a>
                                </span>
                                <span className='social-icon'>
                                    <a href="tel:+918521268654">
                                    <i className="a-remove fa-solid fa-phone" />
                                    </a>
                                </span>
                                <span className='social-icon'>
                                    <a href="https://join.skype.com/invite/uk1HXbTbDHjh" target="_blank" rel="noopener noreferrer">
                                    <i class="a-remove fa-brands fa-skype" />
                                    </a>
                                </span>


                                

                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
