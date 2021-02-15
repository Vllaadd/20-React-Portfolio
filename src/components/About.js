import React, { useState } from 'react';
import './About.css';

const About = () => {
    const [header] = useState({
        subHeader: 'About Me',
        text: 'I am a fullstack web developer.'
    });
    const [state] = useState([
        { id: 1, title: 'Name:', text: 'Vladimir Zizic' },
        { id: 2, title: "Email:", text: 'vladzizic@gmail.com' },
        { id: 4, title: "LinkedIn:", text: <a href='https://www.linkedin.com/in/vladimir-zizic-bb3756134' target='_blank'>LinkedIn</a> },
        { id: 5, title: 'GitHub:', text: <a href='https://github.com/Vllaadd'target='_blank'>GitHub</a> }
    ])
    return (
        <div className='about'>
            <div className='container'>
                <div className='common'>
                    {/* ===THE WELCOME TITLE======================================== */}
                    <h1 className='mainHeader'>{header.subHeader}</h1>
                    <p className='mainContent'>{header.text}</p>
                    <div className='commonBorder'></div>
                </div>
                {/* ===THE ABOUT ME TITLE, IMAGE AND TEXT =============================*/}
                <div className='row h-560 alignCenter'>
                    <div className='col-6'>
                        <div className='about_img'>
                        <img src='/images/about.png' alt='dev' />
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='about_info'>
                            <h1>Hello there! Welcome to my page!</h1>
                            <div className='about_info-p1'>
                                I am a customer service professional with more than 10 years of international experience. In 2020 my journey
                                to Full-Stack Software Engineering started. While currently attending a coding Bootcamp at Columbia
                                University., I am eager to reach excellence in JavaScript, Node.js, OOP, and React through opportunities,
                                including volunteering.</div>
                            {/* ===THE CONTACT INFO========================================= */}
                            <div className='info_contacts'>
                                <div className='row'>
                                {state.map((info) => (
                                    <div className='col-6'>
                                        <strong>{info.title}</strong>
                                        <p>{info.text}</p>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;