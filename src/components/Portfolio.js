import React, { useState } from 'react'

const Portfolio = () => {
    const [header] = useState({
        header: 'My Projects',
        subHeading: 'My projects',
        text: 'These are the projects are created working in JavaScript, Node, Express, Mongo, MySQL, and React'
    });
    const [state] = useState([
        {
            id: 1,
            heading: 'Project 1',
            text: 'This project is about safe space, positivity, meantal health. It was created in especially challening year for most of the people, 2020.'
        },{
            id: 1,
            heading: 'Wather Dashboard',
            text: 'This is a dashboard with weather forecast for a city we type in'
        },{
            id: 1,
            heading: 'Fitness Tracker',
            text: 'Users can track their workout with this application.'
        },{
            id: 1,
            heading: 'Project 2',
            text: 'This is an app where we are able to send this app to our friends who can vote for which restaurant, bar, vacation we wanna do.'
        },{
            id: 1,
            heading: 'Project 3',
            text: 'Project 3 is still in making. '
        }
        ]);
    return ( 
        <div className='projects'>
            <div className='container'>
                <div className='projects_header'>
                    <div className='common'>
                        <h3 className='heading'>{header.header}</h3>
                        <h1 className='mainHeader'>{header.subHeading}</h1>
                        <p className='mainContent'>{header.text}</p>
                        <div className='commonBorder'></div>
                    </div>

                    <div className="row bgMain">
                        {state.map((info) => (
                            <div className="col-4 bgMain">
                                <div className="projects__box">
                                    {info.icon}
                                    <div className="projects_box-header">{info.heading}</div>
                                    <div className="projects_box-p">{info.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Portfolio;