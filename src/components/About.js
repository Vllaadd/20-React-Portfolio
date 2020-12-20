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
        <div>
            <h1>{header.subHeader}</h1>
            <p>{header.text}</p>
        </div>
     );
}
 
export default About;