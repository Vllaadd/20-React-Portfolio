import React, { useState } from 'react';

const Nav = () => {
    const [state, setState] = useState(true);
    return ( 
        <nav className='navbar'>
            <div className='container'>
                    <ul className='navbar-left'>
                        <p>logo goes here</p>
                    </ul>
                    {state ? (
                        <ul className='navbar-right'>
                            <li><a href='#home'>Home</a></li>
                            <li><a href='#about'>About</a></li>
                            <li><a href='#portfolio'>Portfolio</a></li>
                            <li><a href='#contact'>Contact</a></li>
                        </ul>
                    ) : ('')}
                </div>
        </nav>
     );
};
 
export default Nav;