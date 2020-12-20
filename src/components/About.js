import React, { useState } from 'react';

const About = () => {
    const [header] = useState({
        subHeader: 'About Me',
        text: 'Text about me comes here.'
    });
    const [state] = useState([
        { id: 1, title: 'Name:', text: 'Vladimir Zizic'},
        { id: 2, title: "Email", text: 'vladzizic@gmail.com'},
        { id: 3, title: 'Phone', text: '(917)767-7199'},
        { id: 4, title: "LinkedIn", text: 'https://www.linkedin.com/in/vladimir-zizic-bb3756134'},
        { id: 5, title: 'GitHub', text: 'Vllaadd'}
    ])
    return ( 
        <div className='container'>
            <div className='common'>
            <h1 className='mainHeader'>{header.subHeader}</h1>
            <p className='mainContent'>{header.text}</p>
        </div>
        <div className='col-6'>
            <div className='about_info'>
                <h1>Hi There</h1>
                <p className='about_info-p1'>
                    Welcome to my page kind of text comes here.
                </p>
            </div>
        </div>
        <div className='info_contacts'>
            {state.map((info) =>(
                <div>
                    <strong>{info.title}</strong>
                    <p>{info.text}</p>
                </div>
            ))}
        </div>
        </div>
        
     );
}
 
export default About;