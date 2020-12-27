import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    const [state, setState] = useState(true);
    return ( 
        <nav className='navbar'>
            <div className='container'>
                <div className='navbar_container'>
{/*=== NAVBAR LEFT ==================================================== */}
                    <ul className='navbar_left'>
                        <div className='navbar_left-logo'>
                            <img src='/images/logo.png' alt='logo' />
                        </div>
                    </ul>
{/* === NAVBAR RIGHT ================================================== */}
                    <ul className='navbar_right'>
                        <Link to='/home'>
                            <li>Home</li>
                        </Link>
                        <Link to='/about'>
                            <li>About</li>
                        </Link>
                        <Link to='/portfolio'>
                            <li>Portfolio</li>
                        </Link>
                    </ul>
                </div>

            </div>
        </nav>
     );
};
 
export default Nav;