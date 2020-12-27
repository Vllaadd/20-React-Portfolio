import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import './Banner.css';


const Banner = () => {
    const styles = {
        background: "url('/images/portfolio_backgroun.jpg')"
    };
    return (
        <header style={styles} className='header'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='header_content'>
                            <div className='header_section'>
                                <h1>I am Vlad Zizic</h1>
                                <p>I am Vladimir Zizic, a professional web developer.</p>
                                <ul className='header_ul'>
                                    <li><a href='https://www.facebook.com/vladazizic' target='_blank'><FaFacebookSquare /></a></li>
                                    <li><a href='https://www.instagram.com/z.vladd/'><FaInstagramSquare /></a></li>
                                    <li><a href='https://twitter.com/zVladd'><FaTwitterSquare /></a></li>
                                    <li><a href='https://www.linkedin.com/in/vladimir-zizic-bb3756134/'><FaLinkedin /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='banner_img'>
                            <img src='/images/moi.png' alt='developer' />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;