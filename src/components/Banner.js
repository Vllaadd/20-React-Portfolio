import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";


const Banner = () =>{
    return (
        <header className='header'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='header_content'>
                            <div className='header_section'>
                                <ul className='header_ul'>
                                    <li><FaFacebookSquare /></li>
                                    <li><FaInstagramSquare /></li>
                                    <li><FaTwitterSquare /></li>
                                    <li><FaLinkedin /></li>
                                </ul>
                                <h1>I am Vlad Zizic</h1>
                                <p>I am Vladimir Zizic, a professional web developer.</p>
                                <div className='header_buttons'>
                                    <a href='' className='btn btn-outline'>
                                        My Portfolio
                                    </a>
                                </div>
                            </div>  
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
}; 

export default Banner;