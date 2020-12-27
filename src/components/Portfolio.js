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
            gitHub: 'https://github.com/Tzcodes101/Safe-Space',
            deployed: '',
            heading: 'Safe Page',
            text: 'This project is about safe space, positivity, meantal health. It was created in especially challening year for most of the people, 2020.'
        }, {
            id: 2,
            gitHub: 'https://github.com/Vllaadd/06-Weather-Dashboard',
            deployed: 'https://vllaadd.github.io/06-Weather-Dashboard/',
            heading: 'Wather Dashboard',
            text: 'This is a dashboard with weather forecast for a city we type in'
        }, {
            id: 3,
            gitHub: 'https://github.com/funksoup/Hooking-Up-in-Your-Hood',
            deployed: 'https://funksoup.github.io/Hooking-Up-in-Your-Hood/',
            heading: 'Hook Up In Your Hood',
            text: 'When you feel like hooking up in your hood, use our app to stay safe.'
        }, {
            id: 4,
            gitHub: 'https://github.com/carolynmary/pollife',
            deployed: 'https://github.com/carolynmary/pollife',
            heading: 'Pollife',
            text: 'This is an app where we are able to send this app to our friends who can vote for which restaurant, bar, vacation we wanna do.'
        }, {
            id: 5,
            gitHub: '',
            deployed: '',
            heading: 'Project 3',
            text: 'Project 3 is still in making. '
        }
    ]);
    return (
        //===HEADER====================================================================
        <div className='projects'>
            <div className='container'>
                <div className='projects_header'>
                    <div className='common'>
                        <h3 className='heading'>{header.header}</h3>
                        <h1 className='mainHeader'>{header.subHeading}</h1>
                        <p className='mainContent'>{header.text}</p>
                        <div className='commonBorder'></div>
                    </div>
                </div>
                {/* //=== PROJECT CARDS ============================================== */}
                <div className="row bgMain">
                    {state.map((info) => (
                        <div className="col-4 bgMain">
                            <div className='projects__box'>
                                {info.icon}
                                <div className='projects_box-header'>{info.heading}</div>
                                <div className='projects_box-p'>{info.text}</div>
                                <a href={info.gitHub} target='_blank'>GitHub |</a>
                                <a href={info.deployed} target='_blank'>Website</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;

